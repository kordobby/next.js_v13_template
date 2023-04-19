import React from 'react';

/**
 * children 을 작성하지 않으면 하위 노드들은 화면에 렌더링 되지 않습니다.
 **/

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <h2>Root Template</h2> */}
      {children}
    </>
  );
};

export default Template;
