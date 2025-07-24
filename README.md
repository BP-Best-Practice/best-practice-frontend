# Best Practice

Best Practice는 PR 메시지 작성을 자동화해 개발자의 시간을 절약하는 Next.js 기반 프로젝트입니다.
일관된 프로젝트 구조와 코드 품질 유지에 중점을 두었고, 신입부터 시니어까지 모두 활용할 수 있도록 설계했습니다.
GitHub API와 OpenAI를 활용해 커밋 기반의 AI 추천 기능을 제공합니다.

## 기술 스택

| 분류       | 사용 기술               |
| ---------- | ----------------------- |
| 프레임워크 | Next.js (App Router)    |
| 언어       | TypeScript              |
| 스타일     | TailwindCSS             |
| 상태관리   | React 상태 또는 Zustand |
| 인증       | NextAuth.js             |
| 테스트     | Vitest                  |
| 배포       | Vercel                  |
| CI/CD      | GitHub Actions + Docker |
| 문서화     | Storybook               |

## 주요 기능

- 레포지토리 목록 및 커밋 히스토리 조회
- 체크박스 기반 커밋 선택 UI
- 커밋/파일 변경 타입 분석 (추가/수정/삭제)
- AI 기반 PR 메시지 자동 생성
- Post-MVP
  - 활동 이력/히스토리 저장 및 재활용
  - 커밋 메시지 및 PR 제목 추천
  - 생성 결과 수정 또는 GitHub PR 바로 생성(연동 시)

## 프로젝트 구조

```
best-practice/
├── .storybook/             # Storybook 설정 디렉토리
├── .github/                # GitHub Actions 워크플로우
├── docker/                 # Docker 관련 설정
├── public/                 # 정적 파일
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # 공통 UI 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   ├── lib/                # 유틸 함수, API 요청 함수
│   ├── store/              # 상태 관리 (Zustand 등)
│   ├── styles/             # 글로벌 스타일
│   ├── types/              # 타입 정의
│   └── tests/              # 테스트 코드
├── .eslint.config.mjs
├── .prettierrc
├── package.json
└── tsconfig.json
```

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

## 테스트

```bash
pnpm test
```

- `Vitest` 기반의 유닛 테스트 실행
- GitHub Actions에서 PR 생성 시 자동 실행됨

## Docker 실행

```bash
# 개발용 컨테이너 실행
docker compose up --build

# 서비스 배포용 컨테이너 실행
docker run -d -p 3000:3000 best-practice

# 테스트/디버깅 후 바로 종료하고 싶을 때
docker run -it --rm -p 3000:3000
```

## 브랜치 전략

- `main` : 배포용 브랜치
- `dev` : 개발 통합 브랜치
- `feature/{issueId}-{name}` : 기능 개발 브랜치
- `chore/{issueId}-{name}` : 설정, 비즈니스 무관 작업 브랜치
- `bugfix/{issueId}-{name}` : 버그 수정 브랜치
