'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import AuthButton from '@/components/AuthButton';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex">
      <div className="flex flex-col gap-4 border border-black h-screen rounded-md p-4">
        <div className="flex items-center gap-2 mb-4">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={session?.user.image || '/profile.png'}
            alt="Image of the user"
          />
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
