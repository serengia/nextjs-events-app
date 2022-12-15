import Link from "next/link";
import React from "react";
import s from "./Button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={`${s["btn"]} ${props.className}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={`${s["btn"]} ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
