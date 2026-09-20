import { repository, version } from '../package.json';

import { FooterPayload } from '../types/footer';

const footer: FooterPayload = {
  version,
  github: repository.url.replace(/^git\+/, '').replace(/\.git$/, ''),
};

export default footer;
