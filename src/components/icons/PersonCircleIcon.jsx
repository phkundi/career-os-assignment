import React from "react";

export function PersonCircleIcon({ ...props }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1C4.13401 1 1 4.13401 1 8C1 9.65343 1.57326 11.173 2.53186 12.3707C3.24293 11.2252 4.80464 10 8.00001 10C11.1954 10 12.7571 11.2252 13.4681 12.3707C14.4267 11.173 15 9.65343 15 8C15 4.13401 11.866 1 8 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
