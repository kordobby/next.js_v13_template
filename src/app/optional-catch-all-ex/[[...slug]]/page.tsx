import Link from 'next/link';

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <div className="card">
      <h1>Dynamic Routing</h1>
      <p>dynamic route 를 여러개를 사용하면서 params 가 없는 경우도 삽가능</p>
      <div style={{ marginTop: '10px' }}>
        <div className="card_box">
          <p>🤙 말줄임표를 대괄호 안에 추가해 확장할 수 있다.</p>
          <p>{`🗂 app > /optional-catch-all-ex > [[...slug]]`}</p>
          <p>{`📍 slug : ${slug ? slug : '없어도 에러안나지?? 😋'}`}</p>
          <p>{`👌 param 이 없는 경우라도 라우팅이 가능하다.`}</p>
        </div>
        {['gosegu', 'ine/gosegu', 'gosegu/ine/jinburger'].map(
          (value, index) => {
            return (
              <div>
                <Link href={`/optional-catch-all-ex/${value}`}>
                  👉 {value} 로 이동
                </Link>
              </div>
            );
          },
        )}
        <div>
          <Link href={`/optional-catch-all-ex`}>
            🛣 param 이 없는 경우도 이동 가능
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
