import { ComponentProps } from "react";

export function TwitterIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.038a6.54 6.54 0 0 1-1.885.517A3.302 3.302 0 0 0 15.555 2c-.641.38-1.354.656-2.112.806a3.287 3.287 0 0 0-5.595 2.994A9.32 9.32 0 0 1 1.113 2.602a3.287 3.287 0 0 0 1.017 4.384A3.264 3.264 0 0 1 .64 6.579v.041a3.287 3.287 0 0 0 2.636 3.218 3.297 3.297 0 0 1-.864.115 3.25 3.25 0 0 1-.617-.057 3.289 3.289 0 0 0 3.07 2.284A6.588 6.588 0 0 1 .78 13.65 6.625 6.625 0 0 1 0 13.606a9.3 9.3 0 0 0 5.032 1.475c6.037 0 9.341-5 9.341-9.341 0-.143-.004-.284-.01-.425A6.672 6.672 0 0 0 16 3.038Z"
        fill="currentColor"
      />
    </svg>
  );
}
