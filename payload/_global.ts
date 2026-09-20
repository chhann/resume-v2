import { GlobalPayload } from '../types/global';
import { homepage } from '../package.json';

const siteUrl = homepage.replace(/\/$/, '');
const publicAssetPath = (path: string) => {
  if (process.env.NODE_ENV !== 'production') return path;

  const { pathname } = new URL(siteUrl);
  const basePath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${basePath}${path}`;
};
const publicAssetUrl = (path: string) => `${siteUrl}${path}`;

const favicon = publicAssetPath('/favicon.ico');
const previewImage = publicAssetUrl('/20260507.png');

const title = 'Resume: Jeongchan Lee';
const description =
  "PM · BA Jeongchan Lee's web resume — ERP/POS package implementation, Fit-Gap analysis.";

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Preview Image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jeongchan',
        lastName: 'Lee',
        username: 'chhann',
        gender: 'male',
      },
    },
  },
  sectionOrder: [
    'introduce',
    'highlight',
    'experience',
    'project',
    'skill',
    'education',
    'openSource',
    'presentation',
    'article',
    'etc',
  ],
  jsonLd: {
    name: 'Jeongchan Lee',
    jobTitle: 'PM · BA (Business Analyst)',
    worksFor: 'StrongAd',
    url: siteUrl,
    sameAs: [
      'https://github.com/chhann',
      'https://velog.io/@wjdcks2252/posts',
    ],
    knowsAbout: [
      'Fit-Gap Analysis',
      'Business Analysis',
      'ERP',
      'POS',
      'Requirements Elicitation',
      'WBS',
      'Vendor Management',
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Chinese (HSK 5)',
    ],
  },
};
