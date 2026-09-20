import { EducationPayload } from '../types/education';

const education: EducationPayload = {
  disable: false,
  showMoreCount: 3,
  list: [
    {
      title: '부산외국어대학교',
      subTitle: '중국어 전공 (학사)',
      startedAt: '2015-03',
      endedAt: '2021-08',
      descriptions: [
        { content: 'HSK 5급 취득 (2020.07 · 유효기간 만료)' },
        { content: '중국 월수외국어대학교 교환학생 (2019.09 ~ 2020.01) — 현지 회화·문법 과정' },
      ],
      skillKeywords: ['Chinese', 'HSK 5'],
    },
    {
      title: '패스트캠퍼스 강남 Kernel360',
      subTitle: '프론트엔드 심화캠프 4기',
      startedAt: '2025-06',
      endedAt: '2025-08',
      descriptions: [
        {
          content:
            '팀 코드베이스 관점의 협업 — 기존 컴포넌트·로직 재사용, 모노레포 빌드 흐름, 서버리스 배포 워크플로 경험',
        },
      ],
      skillKeywords: ['Next.js', 'React', 'TypeScript', 'Turborepo', 'Supabase', 'Vercel'],
    },
    {
      title: '코리아 IT 아카데미',
      subTitle: 'React + Spring Boot + MySQL 풀스택 과정',
      startedAt: '2023-12',
      endedAt: '2024-05',
      descriptions: [
        {
          content:
            'CRUD API·DTO·Entity 설계, MySQL 스키마 설계와 정규화(Normalization) — 현재 레거시 스키마 분석의 기초',
        },
      ],
      skillKeywords: ['React', 'Spring Boot', 'Java', 'MySQL'],
    },
    {
      title: '그린컴퓨터아카데미',
      subTitle: 'React 프론트엔드 양성과정',
      startedAt: '2023-02',
      endedAt: '2023-07',
      descriptions: [
        { content: 'HTML/CSS · JavaScript 기본기, Git/GitHub 협업 워크플로' },
      ],
      skillKeywords: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    },
  ],
};

export default education;
