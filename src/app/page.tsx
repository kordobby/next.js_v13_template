import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h3>Page Home</h3>
      <h4>Nested Routes</h4>
      <div>
        <Link href="/nested-routes">1 depth</Link>
      </div>
      <div>
        <Link href="/nested-routes/folder">2 depth</Link>
      </div>
      <h4>blog with dynamic routes</h4>
      <div>
        <Link href="/blog/1">blog/params:1</Link>
      </div>
      <div>
        <Link href="/blog/2">blog/params:2</Link>
      </div>
      <div>
        <Link href="/blog/3">blog/params:3</Link>
      </div>
      <h4>blog with parellel routes</h4>
      <p>병렬 경로</p>
      <p>이름이 있는 slot를 사용해 생성된다.</p>
      <div>
        <Link href="/parallel">parallel page</Link>
      </div>
      <p>Route grouping</p>
      <p>이름이 있는 slot를 사용해 생성된다.</p>
      <div>
        <Link href="/1st-generation">1세대 포켓몬</Link>
      </div>
      <div>
        <Link href="/2nd-generation">2세대 포켓몬</Link>
      </div>
      <p>Dynamic segments</p>
      <p>말줄임표를 대괄호 안에 추가해 subsequent segments로 확장</p>
      <div>
        <Link href="/dynamic-segments">"~/"</Link>
      </div>
      <div>
        <Link href="/dynamic-segments/pokemon">"~/pokemon"</Link>
      </div>
      <div>
        <Link href="/dynamic-segments/pokemon/1st">"~/pokemon/1st"</Link>
      </div>
      <div>
        <Link href="/dynamic-segments/pokemon/1st/starting">
          "~/pokemon/1st/starting"
        </Link>
      </div>
      <p>Dynamic Optional Catch-all segments</p>
      <p>
        optional cat-all segment 사이에서의 차이점은 옵셔널일 경우에는
        매개변수가 없는 경로로도 일치가 가능
      </p>
      <div>
        <Link href="/dynamic-optional-segments">"~/"</Link>
      </div>
      <div>
        <Link href="/dynamic-optional-segments/pokemon">"~/pokemon"</Link>
      </div>
      <div>
        <Link href="/dynamic-optional-segments/pokemon/1st">
          "~/pokemon/1st"
        </Link>
      </div>
      <div>
        <Link href="/dynamic-optional-segments/pokemon/1st/starting">
          "~/pokemon/1st/starting"
        </Link>
      </div>
    </main>
  );
}
