import clsx from "clsx";
import { ComponentProps } from "react";

import styles from "./Marketing.module.css";
import { MarketingFooter, MarketingHeader } from "../../app/Marketing";

export function MarketingLayout({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.layout)} {...props}>
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter className={styles.footer} />
    </div>
  );
}
