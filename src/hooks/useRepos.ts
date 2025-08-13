import { useEffect, useState } from 'react';
import { API } from '@/constants/api';

export interface Repo {
  id: number;
  name: string;
  fullName: string;
  private: boolean;
  htmlUrl: string;
  updatedAt: string;
}

export function useRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    fetch(API.GITHUB.REPOS)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => setRepos(d.repos ?? []))
      .catch(() => setRepos([])); // ← 실패 정책 통일
  }, []);

  return {
    repos,
  };
}
