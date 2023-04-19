import './globals.css';
import { metaConfig } from '@/../meta.config';
import FloatingIcon from '@/components/FloatingIcon';
import Icon from '@/components/Icon';
import { notoSans } from '@/fonts';

/**
 * ROOT_LAYOUT
 * layout.tsx
 * must include <html>, <body>
 * Next.js under V13 => _app, _document
 */

/**
 * static metadata
 */
export const metadata = { ...metaConfig };

/**
 * children 을 작성하지 않으면 하위 노드들은 화면에 렌더링 되지 않습니다.
 **/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSans.className}>
      {/* FONT SETTING */}
      <head>
        {/* default meta tags that always added */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <h1>Next.js V13 Template</h1>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Icon path="/" iconType="back">
            🔙
          </Icon>
          <Icon iconType="primary" path="/">
            🏠
          </Icon>
        </div>
        {/* <h2>Root Layout</h2>
        <p>최상위 파일로 나머지를 모두 감쌀 것입니다.</p> */}
        {children}
        <FloatingIcon />
      </body>
    </html>
  );
}
