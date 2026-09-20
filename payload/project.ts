import { ProjectPayload } from '../types/project';

const martPlanning = {
  title: '지역 마트 APP + POS + ERP 통합 솔루션 — 기획·검증 단계',
  startedAt: '2026-07',
  where: '(주)스트롱애드 / PM · BA',
  descriptions: [
    {
      content:
        '조사 내용의 신뢰도 관리 — 대표 답변, 현장 관찰, 벤더 회신이 서로 어긋나는 경우가 생겨 모든 조사 내용에 출처(누가·언제)와 확인 상태(확정/미확인)를 붙여 관리. 미확인 항목은 별도 목록으로 모아 2차 현장조사 때 확인할 질문지로 사용',
    },
    {
      content:
        '기술 리스크 판단 기준 명문화 — "이 기능은 구현 불가"라는 판단이 담당자 감에 좌우되지 않도록, 벤더의 서면 회신 또는 직접 테스트 결과가 있고 대안도 없을 때만 불가로 판정하는 규칙을 정함. 모든 항목을 한 회의에서 한꺼번에 판정하던 방식을 항목별 즉시 판정으로 바꿔 검증이 끝나지 않은 항목 때문에 현장조사·견적이 지연되지 않도록 함',
    },
    {
      content:
        '데모 범위와 완료 기준 정의 — 요구가 늘어나도 범위가 흔들리지 않도록 POS 결제 시나리오 5건을 데모 완료 조건으로 문서화하고, 완료 조건 밖의 기능은 본개발 항목으로 분리. 패키지(Odoo)가 담당할 업무와 앱으로 개발할 업무의 경계, App 기준 시스템(어느 시스템의 값이 원본인지)을 설계 결정으로 기록해 본개발 견적과 To-Be 프로세스 설계의 기준으로 사용',
    },
    {
      content:
        '검증 환경과 일정 관리 — 실제 매장 POS 구성을 테스트 장비로 재현해 결제 단말 연동을 사전 검증. Odoo Enterprise/Community 및 호스팅 방식 비교 검토. 작업 목록(WBS)을 5개 그룹으로 나눠 실제 소요일을 기록하며 일정 편차를 추적',
    },
  ],
};

const operationsAutomationTool = {
  title: '(주)씨이오포털 운영팀 업무 자동화 도구',
  startedAt: '2025-11',
  endedAt: '2026-02',
  where: 'Operations Automation Tool / 풀스택 개발자',
  descriptions: [
    {
      content:
        '운영자가 매일 반복하던 계정 데이터 수집·분류·통합 절차를 단계별로 나눠, 어느 단계까지 자동화하고 어디서 사람이 판단할지(중복 계정·분류 불명 건) 경계를 먼저 합의',
    },
    {
      content:
        '수집 파이프라인을 단계 기반 구조로 재설계 — 중단 지점부터 재개, 중복 제거, 자동 분류를 적용해 장시간 배치 실패 시 처음부터 다시 돌리는 낭비 제거. 조회 패턴에 맞춘 DB 인덱스 설계',
    },
  ],
};

const marketingReportTool = {
  title: '(주)씨이오포털 마케팅 리포트 자동 생성 도구',
  startedAt: '2026-04',
  endedAt: '2026-04',
  where: 'AI Report Automation Tool / 풀스택 개발자',
  descriptions: [
    {
      content:
        '마케팅팀 수기 리포트 작성 절차를 입력 항목·출력 형식 단위로 분해해 AI 생성 가능 범위를 정의하고, 웹 서버 내부에서 PDF까지 생성하는 파이프라인 구현',
    },
    {
      content:
        '공공데이터포털 API 기반 병원 이메일 추출 도구를 Python으로 별도 구축해 캠페인 대상 목록을 마케팅팀에 제공',
    },
  ],
};

const project: ProjectPayload = {
  disable: false,
  showMoreCount: 3,
  list: [martPlanning, operationsAutomationTool, marketingReportTool],
};

export default project;
