import React from "react";
import styles from "./styleLayout.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className={styles.main_layout}>
      <div className={styles.content_layout}>{props.children}</div>
    </div>
  );
};

export default Layout;
