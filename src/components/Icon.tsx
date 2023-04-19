'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

type IconType = 'primary' | 'back' | 'refresh';

type IconProps = {
  children: string;
  path: string;
  iconType: IconType;
};

const Icon: FC<IconProps> = ({ children, path, iconType }) => {
  const route = useRouter();
  const pathName = usePathname();

  const onMoveScreen = () => {
    if (iconType === 'back') {
      route.back();
    } else if (iconType === 'refresh') {
      route.refresh();
    } else {
      route.push(path);
    }
  };

  if (pathName === '/' && iconType === 'back') {
    return <></>;
  }
  return (
    <div className="home_icon" onClick={onMoveScreen}>
      {children}
    </div>
  );
};

export default Icon;
