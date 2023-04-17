import Link from "next/link";

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <>
      <p>slug 가 없는건 불가능</p>
      <p>{slug}</p>
      <Link href="/">go home</Link>
    </>
  );
};

export default Page;
