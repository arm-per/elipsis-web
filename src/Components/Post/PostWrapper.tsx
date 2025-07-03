import { ReactNode } from "react";
import styles from "./PostWrapper.module.css";

type PostWrapperProps = {
  children: ReactNode;
}

const PostWrapper = (props: PostWrapperProps) => {
  const { children } = props;

  return (
    <div className={styles.postWrapper}>
      {children}
    </div>
  );
}

export { PostWrapper };