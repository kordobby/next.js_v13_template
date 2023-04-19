import Link from 'next/link';

const Page = () => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <p className="desc">
        페이지에서 두 개 이상의 탭 바가 있는 경우 하나의 slot처럼 사용 가능하다.
      </p>
      <p className="desc">
        독립적으로 이동할 수 있는 동일한 View 에서 두 개 이상의 페이지를 동시에
        표현한다.
      </p>
      <div className="card_box">
        <p>{`🗂 app > parallel > layout.tsx & page.tsx`}</p>
        <p>{`🗂 app > parallel > @hogwarts > page.tsx`}</p>
        <p>{`🗂 app > parallel > @pokemon > page.tsx`}</p>
        <p>{`🗒︎ 슬롯들은 @folder 컨벤션을 통해 정의된다.`}</p>
      </div>
    </div>
  );
};

export default Page;
