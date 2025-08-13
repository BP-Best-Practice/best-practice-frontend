'use client';

import { type Repo, useRepos } from '@/hooks/useRepos';

export default function ReposPage() {
  const { repos } = useRepos();

  if (repos === null) return <p>불러오는 중…</p>;
  if (repos.length === 0) return <p>레포가 없습니다.</p>;

  return (
    <ul className="space-y-1">
      {repos.map((r: Repo) => (
        <li key={r.id}>
          <a
            className="underline"
            href={r.htmlUrl}
            target="_blank"
            rel="noreferrer"
          >
            {r.fullName}
          </a>
          {r.private ? ' (private)' : ''}
        </li>
      ))}
    </ul>
  );
}
