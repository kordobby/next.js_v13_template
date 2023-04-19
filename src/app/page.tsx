import Link from 'next/link';
import { useRouter } from 'next/router';
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  /* ERROR!!!!! */
  // const router = useRouter();
  /* You have a Server Component that imports next/router. Use next/navigation instead. */

  return (
    <main>
      <div className="card">
        <h2>Nested Routes</h2>
        <div style={{ marginTop: '10px' }}>
          <Link href="/nested-routes-ex">👉 Nested Routes 알아보기</Link>
        </div>
      </div>
      <div className="card">
        <h2>Route grouping</h2>
        <div style={{ marginTop: '10px' }}>
          <Link href="/harry">👉 Route grouping 알아보기</Link>
        </div>
      </div>
      <div className="card">
        <h2>Dynamic Routing</h2>
        <div style={{ marginTop: '10px' }}>
          <Link href="/dynamic-segment-ex/red">
            👉 Dynamic Routing 알아보기
          </Link>
        </div>
      </div>
      <div className="card">
        <h2>Dynamic Segments</h2>
        <h3>Catch-all Segments</h3>
        <div style={{ marginTop: '10px' }}>
          <Link href="/dynamic-segment-catch-all-ex/isedol">
            👉 Dynamic Segments - Catch-all Segments 알아보기
          </Link>
        </div>
      </div>
      <div className="card">
        <h3>Dynamic Segments - Optional Catch-all segments</h3>
        <p>옵셔널일 경우에는 매개변수가 없는 경로로도 일치가 가능</p>
        <div>
          <Link href="/dynamic-segment-optional-catch-all-ex">👉 "~/"</Link>
        </div>
        <div>
          <Link href="/dynamic-segment-optional-catch-all-ex/pokemon">
            👉 "~/pokemon"
          </Link>
        </div>
        <div>
          <Link href="/dynamic-segment-optional-catch-all-ex/pokemon/1st">
            👉 "~/pokemon/1st"
          </Link>
        </div>
        <div>
          <Link href="/dynamic-segment-optional-catch-all-ex/pokemon/1st/starting">
            👉 "~/pokemon/1st/starting"
          </Link>
        </div>
      </div>
      <div className="card">
        <h3>Advanced Routing Patterns</h3>
        <h4>parellel routes</h4>
        <p>병렬 경로</p>
        <p>이름이 있는 slot를 사용해 생성된다.</p>
        <p>
          독립적으로 이동할 수 있는 동일한 View 에서 두 개 이상의 페이지를
          동시에 표현
        </p>
        <div>
          <Link href="/parallel">parallel page</Link>
        </div>
        <h4>intercepting routes</h4>
        <p>경로를 가로채는 경우</p>
        <h4>conditional routes</h4>
        <p>조건부 렌더링</p>
        <h4>client side renderings</h4>
        <p>뭐가 다르녀</p>
        <div>
          <Link href="/csr">CSR page</Link>
        </div>
      </div>
      {/* ERROR!!!!!! CANNOT USE EVENT AT SERVER COMPONENT!!!
      <button onClick={() => console.log('고장나ㅑㄴ?')}>이러면 고장나?</button>
      */}
    </main>
  );
}
