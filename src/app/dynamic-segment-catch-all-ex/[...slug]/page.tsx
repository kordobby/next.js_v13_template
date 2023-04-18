import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/* ADD DYNAMIC META TAGS AT DYNAMIC ROUTES */
export const generateMetadata = async (
  { params, searchParams }: PageProps,
  parent?: ResolvingMetadata
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
      card: "summary",
      title: slug,
    },
  };
};

const Page = ({ params, searchParams }: PageProps) => {
  const { slug } = params;
  return (
    <>
      <p>slug 가 없는건 불가능</p>
      <p>{slug}</p>
      <Link href="/">go home</Link>
    </>
  );
};

export default Page;
