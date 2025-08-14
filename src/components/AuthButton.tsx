'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <button
      className="border px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer"
      onClick={
        session
          ? () => signOut({ callbackUrl: '/' })
          : () => signIn('github', { callbackUrl: '/dashboard' })
      }
    >
      {session ? '로그아웃' : 'GitHub 로그인'}
    </button>
  );
}
