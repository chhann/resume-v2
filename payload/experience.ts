import { ExperiencePayload, ExperienceItem } from '../types/experience';

const strongAd: ExperienceItem = {
  title: '(주)스트롱애드',
  positions: [
    {
      title: 'PM · BA (총괄, 주임)',
      startedAt: '2026-06',
      descriptions: [
        {
          content:
            '지역 식자재 마트 대상 APP + POS + ERP 통합 솔루션 기획·검증 단계(2026.07 ~ 2027.04) PM/BA. 요구사항 수집, 기획·데모 범위 설정, 기술적 실현 가능성 판정, 벤더·발주처 커뮤니케이션 담당. 패키지: Odoo(ERP/POS) · 토스플레이스 결제단말',
        },
        {
          content: '요구사항 수집 및 데모 범위 확정',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '발주처 대표와 서면 문답으로 프로젝트 목표를 합의한 뒤 업무별 질의 진행, 1차 현장조사로 매장 POS 구성과 기능별 실사용 여부 확인',
            },
            {
              content:
                '레거시 POS/ERP 시스템 DB 스키마(169테이블)를 정적 분석해 15개 업무 도메인으로 복원, 현장조사 결과와 교차 확인해 데모 필수 기능 확정',
            },
            {
              content:
                '패키지 표준과 충돌 가능성이 큰 업무 4건(입고 3형태 정산·전화주문 재주문·후결제 경로·복수 사업장)을 Gap 1순위로 도출',
            },
          ],
        },
        {
          content: 'Fit-Gap 분석 및 기술 검증',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '발주처 업무 도메인과 Odoo 표준 기능을 매핑하고, Gap마다 표준 사용·설정·커스터마이징·우회·포기 중 대응 방식을 정하는 기준 수립. 주요 설계 결정 3건 ADR 문서화',
            },
            {
              content:
                '토스플레이스 결제단말 SDK를 직접 구동해 승인 트랜잭션 실측, Odoo 소스 판독으로 중복 결제 방지와 단말 응답 지연 처리 2건은 패키지에 없어 자체 구현 대상으로 확정',
            },
          ],
        },
        {
          content: '벤더·발주처 커뮤니케이션',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                'Odoo 코리아 미팅 2회 및 지원 서면 회신을 거쳐 Enterprise 구독 도입, POS 하드웨어 직접 조달',
            },
            {
              content:
                '발주처 대표·이사 대상 산출물 브리핑(문서 4종 약 150p) 주관, 후속 현장조사 일정 협의 참여',
            },
            {
              content:
                '회의록·문답·벤더 회신 42건을 36개 노트 지식베이스로 재편해 주간보고·월말브리핑 작성',
            },
          ],
        },
      ],
      skillKeywords: [
        '요구사항 분석',
        '프로세스 설계',
        'Gap 분석',
        '패키지 도입(ERP/POS)',
        '벤더 협의',
        '고객 브리핑',
        '문서 작성',
      ],
    },
  ],
};

const ceoPortal: ExperienceItem = {
  title: '(주)씨이오포털 (CEO Portal)',
  positions: [
    {
      title: '프론트엔드 개발자 (풀스택, 1인 개발 체제)',
      startedAt: '2025-10',
      endedAt: '2026-06',
      descriptions: [
        {
          content:
            '사내 운영팀·마케팅팀 업무 도구를 요구사항 수집부터 설계·구현·배포·운영까지 1인 담당. 기획자와 요구사항 정의 및 Figma 화면 설계 협업, Jira·Confluence로 이슈·문서 관리',
        },
        {
          content: '운영팀 계정 통합 업무 자동화 도구',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '운영자 인터뷰로 수작업 절차(다채널 계정 데이터 수집·분류·통합)를 정리하고, 자동화 범위와 예외 처리 규칙(중복 계정, 분류 불명 건)을 먼저 정의',
            },
            {
              content:
                'Desktop App으로 구현·배포 후 사용자 문의·오류 대응 포함 운영. 처리 대상 8만 → 20만 건 확장, 수동 작업 1인 분량 대체',
            },
          ],
        },
        {
          content: '마케팅 리포트 자동 생성 도구',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '마케팅팀이 수기 작성하던 병원 대상 리포트 작성 절차를 AI 기반 자동 생성으로 전환, 일 100장 처리 가능한 구조 구축',
            },
            {
              content:
                '공공데이터 기반 전국 병원 이메일 약 2,000건 확보해 outbound 캠페인 대상 목록 제공',
            },
          ],
        },
        {
          content: '서비스 UI 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '운영 중 서비스의 화면 표시 오류를 원인 진단 후 수정, 반응형 UI 안정화',
            },
          ],
        },
      ],
      skillKeywords: [
        '요구사항 정의',
        '업무 프로세스 자동화',
        '사용자 문의 대응',
        '운영·테스트',
        'Figma',
        'Jira · Confluence',
      ],
    },
  ],
};

const experience: ExperiencePayload = {
  showMoreCount: 2,
  disable: false,
  disableTotalPeriod: true,
  list: [strongAd, ceoPortal],
};

export default experience;
