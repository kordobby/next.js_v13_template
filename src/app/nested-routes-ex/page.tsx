import Link from 'next/link';

const Page = () => {
  return (
    <div className="card">
      <h1>nested routes</h1>
      <div>
        <p>중첩 라우팅을 적용해봅시다.</p>
        <p>중첩경로를 만들고자 하는 경로의 폴더 "내부"에 폴더를 생성합니다.</p>
        <div className="card_box">
          <p>{`🗂 app > nested-routes-ex`}</p>
          <Link href="/nested-routes-ex/folder">👉 중첩 경로로 이동하기</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
