import React, { Fragment } from "react";
import MainHeader from "./main-header";
import s from "./layout.module.css";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main className={s["main"]}>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
