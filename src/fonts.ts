import { Noto_Sans } from 'next/font/google';

/**
 * FONT_OPTIMIZE
 * next/font 에서는 모든 GOOGLE FONT 를 호스팅함
 * */

/**
 * FONT OPTIMIZE
 * weight: font 의 굵기
 * display : font-display at css
 * subsets : font가 적용하는 언어 중 먼저 가져올 나라의 언어 key
 * style : font-style
 * variable : css 변수 방식으로 사용할 때의 이름을 정의 key
 * fallback : 해당 font 를 가져오지 못했을 때의 대체 글꼴
 */

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

/* HOW TO USE

const boldFont = css`
  font-family: ${notoSansKrBold.style.fontFamily},
    ${robotoBold.style.fontFamily};
`;

const mediumFont = css`
  font-family: ${notoSansKrMedium.style.fontFamily},
    ${robotoMedium.style.fontFamily};
export { boldFont, mediumFont };

*/
