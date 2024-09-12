import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import styles from "./MarketingFooter.module.css";
import { Container } from "../../components/primitives/Container";
import { LinkButton } from "../../components/primitives/Button";
import { LinkedInIcon } from "../../components/icons/LinkedInIcon";
import { FacebookIcon } from "../../components/icons/FacebookIcon";
import { TwitterIcon } from "../../components/icons/TwitterIcon";
import { InstagramIcon } from "../../components/icons/InstagramIcon";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Project-C Pvt Ltd.</span>
        <div className={styles.socialIcons}>
          <LinkButton
            to="#"
            icon={<FacebookIcon />}
            target="_blank"
            variant="secondary"
          ></LinkButton>
          <LinkButton
            to="#"
            icon={<TwitterIcon />}
            target="_blank"
            variant="secondary"
          ></LinkButton>
          <LinkButton
            to="#"
            icon={<LinkedInIcon />}
            target="_blank"
            variant="secondary"
          ></LinkButton>
          <LinkButton
            to="#"
            icon={<InstagramIcon />}
            target="_blank"
            variant="secondary"
          ></LinkButton>
        </div>
      </Container>
    </footer>
  );
}
