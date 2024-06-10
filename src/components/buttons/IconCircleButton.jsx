import React from "react";

export function IconCircleButton({ href, ...props }) {
  return (
    <a className="icon-button icon-button--rounded" href={href}>
      <props.icon className="icon-button__icon" />
    </a>
  );
}
