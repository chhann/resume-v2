import { EtcPayload } from '../types/etc';

const etc: EtcPayload = {
  disable: false,
  showMoreCount: 4,

  list: [
    // 자격증 — HSK 5급은 education(부산외국어대학교)에 기재.
    // 그 외 보유 자격증이 있으면 아래 형식으로 추가:
    // { title: '자격증명', subTitle: '발급기관', startedAt: 'YYYY-MM' },
    {
      title: '육군 병장 만기 전역',
      subTitle: '제7 탄약창경비중대',
      startedAt: '2016-07',
      endedAt: '2018-04',
    },
    {
      title: '개금고등학교',
      subTitle: '인문계 졸업 (부산진구 개금동)',
      startedAt: '2012-03',
      endedAt: '2015-01',
    },
  ],
};

export default etc;
