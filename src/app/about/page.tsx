import Link from 'next/link';
import Button from '@/components/Button';

const Page = () => {
  return (
    <div className="card">
      <h2>🙋‍♀️ Template 활용 방법</h2>
      <p>템플릿은 Next.js 13 베타 버전 문서를 참고해서 작성되었습니다.</p>
      <div style={{ padding: '20px 40px' }}>
        <ul>
          <li>root 에서 설정 파일을 참고하세요.</li>
          <li>{`"src > app" 에 위치한 special file 들을 참고하세요.`}</li>
          <li>{`"src > app > layout.tsx" 의 구조를 확인해보세요.`}</li>
          <li>Meta 태그는 'meta.config.ts'에서 수정해보세요.</li>
          <li>routing 방식에 대한 내용들은 홈화면 각 카드들을 확인해보세요.</li>
          <li>전반적인 파일들의 계층 구조를 파악해보세요.</li>
          <li>공식문서 번역에 대한 내용은 "Docs.md" 파일을 확인해주세요.</li>
          <li>공식문서 번역은 계속 업데이트될 예정입니다.</li>
        </ul>
      </div>
      <div className="desc_box">
        <Link
          target="_blank"
          href="https://github.com/kordobby/next.js_v13_template"
        >
          🥕 Template source code
        </Link>
      </div>
      <div className="desc_box">
        <Link target="_blank" href="https://leetrue-log.vercel.app/">
          👩🏻‍🌾 이트루 블로그
        </Link>
      </div>
    </div>
  );
};

export default Page;
