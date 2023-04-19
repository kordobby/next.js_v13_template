'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
type IconProps = {
  children: string;
  path: string;
  back?: boolean;
};

const Icon: FC<IconProps> = ({ children, path, back }) => {
  const route = useRouter();
  const pathName = usePathname();
  console.log(pathName !== '/');
  const onMoveScreen = () => {
    if (back) {
      route.back();
    } else {
      route.push(path);
    }
  };

  if (pathName === '/' && back) {
    return <></>;
  }
  return (
    <div className="home_icon" onClick={onMoveScreen}>
      {children}
    </div>
  );
};

export default Icon;
