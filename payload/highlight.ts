import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '요구사항은 현장에서 확인한다',
      description:
        '발주처 대표와 사업 목표를 먼저 합의한 뒤, 매장 현장조사와 기존 시스템 DB 분석으로 "실제로 쓰는 업무"만 골라 도입 범위를 정합니다.',
      keywords: ['현장조사', 'As-Is 분석', '범위 정의'],
    },
    {
      title: '패키지 표준과 업무의 차이를 판정한다',
      description:
        'Odoo 표준 기능과 발주처 업무를 하나씩 대조해 그대로 쓸 것 / 설정으로 맞출 것 / 개발할 것 / 범위에서 제외할 것을 나눕니다. 구현 가능 여부는 벤더 서면 회신이나 직접 테스트로만 확정합니다.',
      keywords: ['Fit-Gap 분석', '기술 검증', '벤더 협의'],
    },
    {
      title: '말이 아닌 문서로 발주처를 설득한다',
      description:
        '산출물 4종 약 150p 브리핑, 주간·월간 보고, 회의록·벤더 회신을 정리한 지식베이스 운영. 발주처가 결정에 필요한 근거를 문서로 받도록 합니다.',
      keywords: ['고객 브리핑', '문서 작성', '보고 체계'],
    },
  ],
};

export default highlight;
