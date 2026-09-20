import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import { NextComponentType } from 'next';

config.autoAddCss = false;

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}) {
  return <Component {...pageProps} />;
}
