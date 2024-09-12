import { ComponentProps } from "react";

export function FacebookIcon(props: ComponentProps<"svg">) {
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
        d="M8 0C3.588 0 0 3.588 0 8c0 4.012 3.044 7.325 7.017 7.874v-5.57H5.378V8H7.017V6.294c0-1.616.988-2.504 2.432-2.504.693 0 1.444.125 1.444.125v1.594h-.813c-.8 0-1.05.497-1.05 1.006V8h1.81l-.29 2.305H9.03v5.57C13.012 15.325 16 12.012 16 8c0-4.412-3.588-8-8-8Z"
        fill="currentColor"
      />
    </svg>
  );
}
