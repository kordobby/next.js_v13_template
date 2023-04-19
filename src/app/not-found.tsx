import Icon from '@/components/Icon';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <p>PAGE NOT FOUND</p>
      <Icon path="/" iconType="refresh">
        ♻️
      </Icon>
      <p>not found</p>
    </>
  );
};

export default NotFound;
