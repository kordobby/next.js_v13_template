import { Noto_Sans } from 'next/font/google';

/**
 * FONT_OPTIMIZE
 * next/font 에서는 모든 GOOGLE FONT 를 호스팅함
 * */

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});
