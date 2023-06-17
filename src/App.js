import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import SideDrawer from "./components/SideDrawer";

import "./layout.css";

function App() {
  return (
    <div className="container">
      <section className="left-container">
        <SideDrawer />
      </section>
      <section className="right-container">
        <MainHeader />
        <MainContent />
      </section>
    </div>
  );
}

export default App;
