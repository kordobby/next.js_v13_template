import Link from "next/link";

const PageBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <p>Page Blog</p>
      <p>{params?.slug}</p>
      <Link href="/">Move Home</Link>
    </div>
  );
};

export default PageBlog;
