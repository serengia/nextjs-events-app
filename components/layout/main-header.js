import Link from "next/link";
import React from "react";
import s from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={s["header"]}>
      <div className={s["logo"]}>
        <Link href={"/"}>Event Kenya</Link>
      </div>
      <nav className={s["navigation"]}>
        <li>
          <Link href={"/events"}>All Events</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainHeader;
