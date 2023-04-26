import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas.faShuttleSpace);
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
