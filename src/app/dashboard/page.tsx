'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import AuthButton from '@/components/AuthButton';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex">
      <div className="flex flex-col gap-4 border border-black h-screen rounded-md p-4">
        <div className="flex items-center gap-2 mb-4">
          <img className="rounded-full w-[2.8rem]" src={session?.user.image} />
          <p>{session?.user.name}</p>
          <AuthButton />
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href={'/repos'}>
            나의 레포지토리
          </Link>
          <Link className="underline" href={'/repos'}>
            나의 레포지토리
          </Link>
          <Link className="underline" href={'/repos'}>
            나의 레포지토리
          </Link>
          <Link className="underline" href={'/repos'}>
            나의 레포지토리
          </Link>
          <Link className="underline" href={'/repos'}>
            나의 레포지토리
          </Link>
        </div>
      </div>

      <div>Dashboard</div>
    </div>
  );
}
