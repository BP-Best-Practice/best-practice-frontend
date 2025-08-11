import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import type { GitHubProfile } from '@/types/oauth';

const handler = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // 로그인 시에만 account와 profile 존재
      if (account && profile) {
        const githubProfile = profile as GitHubProfile;

        token.id = githubProfile.id;
        token.login = githubProfile.login; // GitHub 유저네임
        token.accessToken = account.access_token; // GitHub API 사용시 필요
      }
      return token;
    },
    async session({ session, token }) {
      // session.user에 추가 정보 주입
      session.user.id = token.id as string;
      session.user.login = token.login as string;
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
