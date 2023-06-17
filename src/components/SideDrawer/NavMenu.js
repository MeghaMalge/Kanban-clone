import { Home } from "../../assets/icons/Home";
import { Message } from "../../assets/icons/Message";
import { Task } from "../../assets/icons/Task";
import { Profile } from "../../assets/icons/Profile";
import { Setting } from "../../assets/icons/Setting";

import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li className={styles.menuItem}>
        <Home />
        <span>Home</span>
      </li>
      <li className={styles.menuItem}>
        <Message />
        <span>Messages</span>
      </li>
      <li className={styles.menuItem}>
        <Task />
        <span>Tasks</span>
      </li>
      <li className={styles.menuItem}>
        <Profile />
        <span>Members</span>
      </li>
      <li className={styles.menuItem}>
        <Setting />
        <span>Settings</span>
      </li>
    </ul>
  );
}
