import clsx from "clsx";
import { Link } from "react-router-dom";
import { ComponentProps } from "react";
import styles from "./MarketingHeader.module.css";
import { Logo } from "../Logo";
import { Container } from "../../components/primitives/Container";
import { Button } from "../../components/primitives/Button";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <form>
          <Button>Sign in</Button>
        </form>
      </Container>
    </header>
  );
}
