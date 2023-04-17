import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h3>Page Home</h3>
      <h4>Nested Routes : 중첩 라우팅</h4>
      <div>
        <Link href="/nested-routes-ex">1 depth</Link>
      </div>
      <div>
        <Link href="/nested-routes-ex/folder">2 depth</Link>
      </div>
      <h3>Route grouping</h3>
      <p>폴더 계층 구조를 벗어나 경로 그룹을 생성 가능하게 하는 방법</p>
      <div>
        <Link href="/1st-generation">1세대 포켓몬</Link>
      </div>
      <div>
        <Link href="/2nd-generation">2세대 포켓몬</Link>
      </div>
      <h3>Dynamic Segments</h3>
      <p>동적 데이터에서 경로를 생성하는 경우</p>
      <div>
        <Link href="/dynamic-segment-ex/1">dynamic-segment-ex/params:1</Link>
      </div>
      <div>
        <Link href="/dynamic-segment-ex/2">dynamic-segment-ex/params:2</Link>
      </div>
      <h3>Dynamic Segments - Catch-all Segments</h3>
      <p>말줄임표를 대괄호 안에 추가해 subsequent segments로 확장</p>
      <div>
        <Link href="/dynamic-segment-catch-all-ex">"~/"</Link>
      </div>
      <div>
        <Link href="/dynamic-segment-catch-all-ex/pokemon">"~/pokemon"</Link>
      </div>
      <div>
        <Link href="/dynamic-segment-catch-all-ex/pokemon/1st">
          "~/pokemon/1st"
        </Link>
      </div>
      <div>
        <Link href="/dynamic-segment-catch-all-ex/pokemon/1st/starting">
          "~/pokemon/1st/starting"
        </Link>
      </div>
      <h3>Dynamic Segments - Optional Catch-all segments</h3>
      <p>옵셔널일 경우에는 매개변수가 없는 경로로도 일치가 가능</p>
      <div>
        <Link href="/dynamic-segment-optional-catch-all-ex">"~/"</Link>
      </div>
      <div>
        <Link href="/dynamic-segment-optional-catch-all-ex/pokemon">
          "~/pokemon"
        </Link>
      </div>
      <div>
        <Link href="/dynamic-segment-optional-catch-all-ex/pokemon/1st">
          "~/pokemon/1st"
        </Link>
      </div>
      <div>
        <Link href="/dynamic-segment-optional-catch-all-ex/pokemon/1st/starting">
          "~/pokemon/1st/starting"
        </Link>
      </div>
      <h4>blog with parellel routes</h4>
      <p>병렬 경로</p>
      <p>이름이 있는 slot를 사용해 생성된다.</p>
      <div>
        <Link href="/parallel">parallel page</Link>
      </div>
    </main>
  );
}
