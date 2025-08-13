import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { prisma } from '@/lib/prisma';
import type { GitHubRepo } from '@/types/oauth';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const account = await prisma.account.findFirst({
    where: { userId: session.user.id, provider: 'github' },
    select: { access_token: true },
  });
  if (!account?.access_token) {
    return new Response('No GitHub token', { status: 401 });
  }

  const res = await fetch('https://api.github.com/user/repos?per_page=30', {
    headers: {
      Authorization: `Bearer ${account.access_token}`,
      Accept: 'application/vnd.github+json',
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    return new Response(`GitHub API error: ${res.status}`, {
      status: res.status,
    });
  }

  const repos = await res.json();
  const data = repos.map((repo: GitHubRepo) => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    private: repo.private,
    htmlUrl: repo.html_url,
    updatedAt: repo.updated_at,
  }));

  return Response.json({ repos: data });
}
