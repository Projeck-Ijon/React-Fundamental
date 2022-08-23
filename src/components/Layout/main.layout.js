import React from "react";
import Footer from "./footer";
import Navigation from "./navigation.layout";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default MainLayout;
