import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>template</h2>
      {children}
    </div>
  );
};

export default Template;
