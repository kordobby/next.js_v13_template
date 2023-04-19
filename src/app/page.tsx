import FloatingIcon from '@/components/FloatingIcon';
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
        <h2>About Template</h2>
        <div style={{ marginTop: '10px' }}>
          <Link href="/about">📔 Template 에 대한 설명</Link>
        </div>
      </div>
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
            👉 Catch-all Segments 알아보기
          </Link>
        </div>
      </div>
      <div className="card">
        <h2>Dynamic Segments</h2>
        <h3>Optional Catch-all segments</h3>
        <div style={{ marginTop: '10px' }}>
          <Link href="/optional-catch-all-ex/isedol">
            👉 Optional Catch-all Segments 알아보기
          </Link>
        </div>
      </div>
      <div className="card">
        <h2>Parellel Routes</h2>
        <div style={{ marginTop: '10px' }}>
          <Link href="/parallel">👉 Parallel Routes 알아보기</Link>
        </div>
      </div>
      <div className="card">
        <h2>ETC</h2>
        <div style={{ marginTop: '10px' }}>
          <p>이외에도 intercepting routes, conditional routes 등이 있다.</p>
        </div>
      </div>
      {/* ERROR!!!!!! CANNOT USE EVENT AT SERVER COMPONENT!!!
      <button onClick={() => console.log('고장나ㅑㄴ?')}>이러면 고장나?</button>
      */}
    </main>
  );
}
