import React from "react";

export function TextIconEndButton({ href, text, ...props }) {
  return (
    <a className="button button--primary" href={href}>
      {text}
      <props.icon className="button__icon" />
    </a>
  );
}
