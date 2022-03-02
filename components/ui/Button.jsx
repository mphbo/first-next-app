import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
