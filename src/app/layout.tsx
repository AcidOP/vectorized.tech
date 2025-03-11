import type { Metadata } from 'next';

import './globals.css';

import { fontBrico } from '@/components/fonts';
import Navbar from '@/components/navbar/navbar';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
