# Jeongchan Lee Resume (PM / Business Analyst)

Next.js 기반 정적 웹 이력서입니다. 이력서 본문 데이터는 `payload/`에서 관리하고, `npm run build` 시 `docs/`에 Static HTML(정적 HTML)이 생성됩니다.

## Links

- Resume (PM/BA): https://chhann.github.io/resume-v2/
- Resume (Developer): https://chhann.github.io/resume/
- Repository: https://github.com/chhann/resume-v2
- GitHub: https://github.com/chhann
- Blog: https://velog.io/@wjdcks2252/posts

## Stack

- Next.js 16
- React 19
- TypeScript 5.9
- Pure CSS
- GitHub Actions
- GitHub Pages

## Requirements

- Node.js >= 24 (`.nvmrc` 참고)
- npm

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Development Server(개발 서버) |
| `npm run typecheck` | TypeScript Type Check(타입 체크) |
| `npm run lint` | ESLint |
| `npm run build` | Production Build(프로덕션 빌드) + Static HTML 생성 |
| `npm run clean` | `docs/`, `.next` 삭제 |

## Project Structure

```text
component/   # 이력서 섹션별 React Component(컴포넌트)
pages/       # Next.js Page(페이지)
payload/     # 이력서 데이터
types/       # TypeScript Type Definition(타입 정의)
styles/      # Global CSS(전역 스타일)
public/      # Static Asset(정적 자산)
docs/        # Build Output(빌드 결과물, gitignored)
```

## Data Flow

```text
payload/*.ts -> types/*.ts -> component/*/*.tsx -> pages/index.tsx
```

## Deploy

`main` 브랜치에 push하면 GitHub Actions가 다음 순서로 실행됩니다. Actions 탭에서 CI 워크플로우를 수동으로 실행할 수도 있습니다.

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`
5. `docs/` 산출물을 `gh-pages` 브랜치에 배포

GitHub Pages 설정:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`
- Custom Domain: 비워 둠

`package.json`의 `homepage` 값은 `https://chhann.github.io/resume-v2`입니다. Project Pages(프로젝트 페이지) 배포이므로 별도 Custom Domain(커스텀 도메인)과 `CNAME`은 사용하지 않습니다.

## Resume Editing

이력서 내용은 주로 `payload/`만 수정합니다.

- `payload/profile.ts`: 이름, 연락처, 프로필 이미지
- `payload/introduce.ts`: 자기소개
- `payload/highlight.ts`: 핵심 강점
- `payload/experience.ts`: 경력
- `payload/project.ts`: 프로젝트
- `payload/skill.ts`: 기술 스택
- `payload/education.ts`: 교육
- `payload/article.ts`: 블로그/글
- `payload/_global.ts`: SEO(Search Engine Optimization, 검색 엔진 최적화), OpenGraph, JSON-LD, 섹션 순서

## Quality Gate

배포 전 최소 검증:

```bash
npm run typecheck
npm run lint
npm run build
```
