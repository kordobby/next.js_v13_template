import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/* ADD DYNAMIC META TAGS AT DYNAMIC ROUTES */
export const generateMetadata = async (
  { params, searchParams }: PageProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> => {
  // read route params
  const { slug } = params;

  // fetch data
  /* EXAMPLE
  const pokemon = await fetch(`https://.../${id}`).them((res) => res.json());
   */
  return {
    title: slug,
    openGraph: {
      title: slug,
    },
    twitter: {
      card: 'summary',
      title: slug,
    },
  };
};
//         <p>말줄임표를 대괄호 안에 추가해 subsequent segments로 확장</p>

const Page = ({ params, searchParams }: PageProps) => {
  const { slug } = params;

  return (
    <div className="card">
      <h1>Dynamic Routing</h1>
      <p>dynamic route 를 여러개를 사용할 경우는 어떻게 작성할까?</p>
      <div style={{ marginTop: '10px' }}>
        <div className="card_box">
          <p>🤙 말줄임표를 대괄호 안에 추가해 확장할 수 있다.</p>
          <p>{`🗂 app > dynamic-segment-catch-all-ex > [...slug]`}</p>
          <p>{`📍 slug : ${slug}`}</p>
          <p>{`⛔ param 이 없는 경우는 라우팅이 불가하다.`}</p>
        </div>
        {['woowakgood', 'woowakgood/angel', 'woowakgood/angel/messi'].map(
          (value, index) => {
            return (
              <div>
                <Link href={`/dynamic-segment-catch-all-ex/${value}`}>
                  👉 {value} 로 이동
                </Link>
              </div>
            );
          },
        )}
        <div>
          <Link href={`/dynamic-segment-catch-all-ex`}>
            ⛔ param 이 없는 경우는 이동이 불가할 것
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
