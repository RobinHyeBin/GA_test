import React, { FC, ReactNode } from "react";
import Header from "./Header";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
