'use client';
import { usePathname, useRouter } from 'next/navigation';

const FloatingIcon = () => {
  const router = useRouter();
  return (
    <div className="floating">
      <div
        className="floating_icon"
        onClick={() => {
          window.open(
            'https://github.com/kordobby/next.js_v13_template',
            '_blank',
          );
        }}
      >
        🐈
      </div>
      <div
        className="floating_icon"
        onClick={() => {
          window.open('https://leetrue-log.vercel.app/', '_blank');
        }}
      >
        👩🏻‍🌾
      </div>
    </div>
  );
};

export default FloatingIcon;
