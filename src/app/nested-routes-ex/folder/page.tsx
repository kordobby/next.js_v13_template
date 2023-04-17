import Link from "next/link";

const Page = () => {
  return (
    <>
      <p>folder</p>
      <div>
        <p>this Link components are at "/nested-routes/folder"</p>
        <p>not sharing html tags between two pages</p>
        <Link href="/nested-routes">Go 1 Depth Page</Link>
      </div>
      <div>
        <Link href="/">Go Home</Link>
      </div>
    </>
  );
};

export default Page;
