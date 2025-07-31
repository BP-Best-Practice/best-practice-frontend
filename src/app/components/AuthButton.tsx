'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <>
      <p>안녕하세요, {session.user?.name}</p>
      <button
        className="border px-4 py-2 bg-black text-white rounded-md"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    </>
  ) : (
    <button
      className="border px-4 py-2 bg-black text-white rounded-md"
      onClick={() => signIn('github')}
    >
      GitHub 로그인
    </button>
  );
}
