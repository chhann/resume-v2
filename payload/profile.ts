import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProfilePayload } from '../types/profile';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { homepage } from '../package.json';

const siteUrl = homepage.replace(/\/$/, '');
const publicAssetPath = (path: string) => {
  if (process.env.NODE_ENV !== 'production') return path;

  const { pathname } = new URL(siteUrl);
  const basePath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${basePath}${path}`;
};

const image = publicAssetPath('/20260507.png');

const profile: ProfilePayload = {
  disable: false,
  image,
  name: {
    title: '이정찬',
    small: '',
  },
  contact: [
    {
      title: 'wjdcks2252@gmail.com',
      link: 'mailto:wjdcks2252@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-5168-2220',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/chhann',
      icon: faGithub,
    },
    {
      title: 'velog',
      link: 'https://velog.io/@wjdcks2252/posts',
      icon: faRss,
    },
  ],
  notice: {
    title: '휴대전화 또는 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
  tagline: 'PM · BA',
  headings: [
    { value: '중국어', label: '전공 · 교환학생 · HSK 5급 이력' },
    { value: '96.08.05', label: 'BIRTH' },
    { value: '부산', label: 'Address' },
  ],
};

export default profile;
