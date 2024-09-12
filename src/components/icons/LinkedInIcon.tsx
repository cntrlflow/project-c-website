import { ComponentProps } from "react";

export function LinkedInIcon(props: ComponentProps<"svg">) {
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
        d="M1.333 0C0.596 0 0 0.596 0 1.333v13.333C0 15.404 0.596 16 1.333 16h13.333c0.737 0 1.333-0.596 1.333-1.333V1.333C16 0.596 15.404 0 14.667 0H1.333zM4.667 12.5H2.667V6.833h2V12.5zm-1-6.5c-0.733 0-1.333-0.6-1.333-1.333S2.267 3.333 3 3.333c0.733 0 1.333 0.6 1.333 1.333S3.733 5.333 3 5.333zm8.667 6.5h-2v-3.5c0-0.833-0.267-1.5-1-1.5s-1.333 0.6-1.333 1.333v3.667h-2V6.833h2v1.083c0.4-0.6 1.1-1 1.833-1 1.333 0 2.333 1 2.333 2.5v3.167z"
        fill="currentColor"
      />
    </svg>
  );
}
