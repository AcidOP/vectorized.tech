import type { Metadata } from 'next';

import './globals.css';

import { fontBrico } from '@/components/fonts';

import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Vectorized',
  description: 'Creative design and development studio',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`bg-background container text-white antialiased ${fontBrico.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
