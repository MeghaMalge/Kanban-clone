import ColorFilter from "../../assets/images/colorfilter.png";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import NavMenu from "./NavMenu";
import MyProjects from "./MyProjects";
import Thoughts from "./Thoughts";

import styles from "./SideDrawer.module.css";

export default function SideDrawer({ children, header }) {
  return (
    <div className={styles.sideDrawer}>
      <header className={styles.header}>
        <span className={styles.headerText}>
          <img src={ColorFilter} alt="color-filter" />
          <h2>Project M.</h2>
        </span>
        <ArrowLeft />
      </header>
      <main>
        <NavMenu />
        <MyProjects />
        <Thoughts />
      </main>
    </div>
  );
}
