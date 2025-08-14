// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      login: string;
      name?: string;
      email?: string;
      image?: string;
    };
    accessToken?: string;
  }
}
