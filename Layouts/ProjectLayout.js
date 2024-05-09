import React from "react";
import styles from "../styles/LayoutStyle/projectlayout.module.css";
import Navbar2 from "../components/Navbar2";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

function ProjectLayout({ children, link }) {
  return (
    <div className={styles.container}>
      {/* <Navbar2 /> */}
      <div className={styles.bg}>
        <div className={styles.firstside}>
          <div className={styles.arrow} onClick={link}>
            <FaArrowLeft size={20} style={{ color: "#97DECE" }} />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.secside}></div>
      </div>
    </div>
  );
}

export default ProjectLayout;
