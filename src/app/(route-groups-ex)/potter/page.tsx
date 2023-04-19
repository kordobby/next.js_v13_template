import Link from 'next/link';

const Page = () => {
  return (
    <div className="card">
      <h1>Route Grouping</h1>
      <p>폴더 계층 구조를 벗어나 경로 그룹을 생성 가능하게 하는 방법</p>
      <div style={{ marginTop: '10px' }}>
        <p></p>
        <div className="card_box">
          <p>{`🗂 app > (route-groups-ex) > potter`}</p>
          <p>{`📍 "/potter"`}</p>
          <p>
            폴더에 "(route-groups-ex)" 가 있지만 주소창에는 나타나지 않는다.
          </p>
        </div>
        <Link href="/harry">👉 같은 그룹 내 경로 확인해보기</Link>
      </div>
    </div>
  );
};

export default Page;
