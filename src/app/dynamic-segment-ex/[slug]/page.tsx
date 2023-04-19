import Link from 'next/link';

const PageBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="card">
      <h1>Dynamic Routing</h1>
      <p>동적 경로로 이동하는 방법을 알아보자.</p>
      <div style={{ marginTop: '10px' }}>
        <p></p>
        <div className="card_box">
          <p>{`🗂 app > dynamic-segment-ex > [slug]`}</p>
          <p>{`📍 "/dynamic-segment-ex/${params.slug}"`}</p>
          <p>{`🗒︎ [slug] 는 정해져있지 않으며 동적인 데이터에 의해 결정된다.`}</p>
        </div>
        {['red', 'green', 'blue'].map((value, index) => {
          if (params.slug === value) return null;
          return (
            <div>
              <Link href={`/dynamic-segment-ex/${value}`}>
                👉 {value} 로 이동
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageBlog;
