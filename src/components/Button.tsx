'use client';

import { useRouter } from 'next/navigation';
type ButtonProps = {
  btnType: 'primary' | 'danger' | undefined;
  children: string;
};

const Button = ({ btnType, children }: ButtonProps) => {
  if (!children) return <></>;
  const router = useRouter();
  const hello = () => {
    router.push('/');
  };
  return (
    <button
      onClick={() => {
        router.push('/');
      }}
    >
      미친버튼
    </button>
  );
};

export default Button;
