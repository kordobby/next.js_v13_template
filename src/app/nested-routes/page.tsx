import Link from "next/link";

const Page = () => {
  return (
    <>
      nested routes
      <div>
        <p>this Link components are at "/nested-routes"</p>
        <Link href="/nested-routes/folder">Go 2 Depth Page</Link>
      </div>
      <div>
        <Link href="/nested-routes/folder">Go Home</Link>
      </div>
    </>
  );
};

export default Page;
