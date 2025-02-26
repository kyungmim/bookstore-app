import { Noto_Sans_KR } from 'next/font/google';
import '@/styles/reset.scss';
import '@/styles/common.scss';
import '@/styles/variable.scss';
import { Metadata } from 'next';
import Header from '@/components/Header';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansKR.variable}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bookstore-app</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
