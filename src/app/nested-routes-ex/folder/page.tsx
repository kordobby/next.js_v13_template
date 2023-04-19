import Link from 'next/link';
import Button from '@/components/Button';
const Page = () => {
  return (
    <div className="card">
      <h1>nested routes</h1>
      <p>상단 주소창을 확인해봅시다.</p>
      <div className="card_box">
        <p>{`🗂 app > nested-routes-ex > folder`}</p>
        <p>"/nested-routes/folder"</p>
      </div>
    </div>
  );
};

export default Page;
