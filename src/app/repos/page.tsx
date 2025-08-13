'use client';

import { useEffect, useState } from 'react';
import { API } from '@/constants/api';

type Repo = {
  id: number;
  name: string;
  fullName: string;
  private: boolean;
  htmlUrl: string;
  updatedAt: string;
};

export default function ReposPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    fetch(API.GITHUB.REPOS)
      .then((r) => r.json())
      .then((d) => setRepos(d.repos ?? []))
      .catch(console.error);
  }, []);

  if (repos === null) return <p>불러오는 중…</p>;
  if (repos.length === 0) return <p>레포가 없습니다.</p>;

  return (
    <ul className="space-y-1">
      {repos.map((r) => (
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
