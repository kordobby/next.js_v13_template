import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

const Page = () => {
  return (
    <div>
      <div>
        <Button btnType="primary">이동하자</Button>
      </div>
      <div>
        <Link href="/">미친 링크</Link>
      </div>
    </div>
  );
};

export default Page;
