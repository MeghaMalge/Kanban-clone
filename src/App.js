import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import SideDrawer from "./components/SideDrawer";

import styles from "./layout.module.css";

function App() {
  return (
    <div className={styles.container}>
      <section className={styles.leftContainer}>
        <SideDrawer />
      </section>
      <section className={styles.rightContainer}>
        <MainHeader />
        <MainContent />
      </section>
    </div>
  );
}

export default App;
