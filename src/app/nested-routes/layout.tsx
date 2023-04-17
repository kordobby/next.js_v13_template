import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p>will share layout at parent segment</p>
      {children}
    </>
  );
};

export default Layout;
