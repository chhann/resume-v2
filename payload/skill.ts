import { SkillPayload, SkillItem } from '../types/skill';

const analysis: SkillItem = {
  category: 'Analysis & Project Management',
  items: [
    { title: 'Fit-Gap Analysis', level: 3 },
    { title: 'As-Is / To-Be Process Mapping', level: 3 },
    { title: 'Requirements Elicitation · Interview Design', level: 3 },
    { title: 'WBS · Effort Tracking', level: 2 },
    { title: 'Technical Risk Assessment', level: 2 },
    { title: 'ADR · Decision Log', level: 2 },
  ],
};

const collaboration: SkillItem = {
  category: 'Collaboration & Tools',
  items: [
    { title: 'Client Briefing · Facilitation', level: 2 },
    { title: 'Vendor Management', level: 2 },
    { title: 'Figma', level: 2 },
    { title: 'Notion · Obsidian (Knowledge Base)', level: 2 },
    { title: 'Jira · Confluence', level: 1 },
    { title: 'flow (협업 태스크 관리)', level: 1 },
  ],
};

const technical: SkillItem = {
  category: 'Technical Literacy — 명세의 실현 가능성 검증용',
  items: [
    { title: 'Open-source ERP/POS Package (구조 · 소스 판독)', level: 2 },
    { title: 'TypeScript · Next.js · React', level: 2 },
    { title: 'PostgreSQL · MySQL (스키마 분석)', level: 2 },
    { title: 'NestJS · Spring Boot', level: 1 },
    { title: 'Electron · AWS · Vercel · Supabase', level: 1 },
  ],
};

const language: SkillItem = {
  category: 'Language',
  items: [
    { title: '중국어 — HSK 5급 (2020.07 취득 · 유효기간 만료), 전공 · 교환학생', level: 2 },
    { title: '영어 — 업무 문서 독해 · 공인 성적 응시 예정', level: 1 },
  ],
};

const skill: SkillPayload = {
  disable: true,
  skills: [analysis, collaboration, technical, language],
};

export default skill;
