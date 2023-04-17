import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h3>Page Home</h3>
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
    </main>
  );
}
