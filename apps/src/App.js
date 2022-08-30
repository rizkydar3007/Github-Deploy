import "./App.css";
import About from "./BootstrapComponent/About";
import NavigationBar from "./BootstrapComponent/NavigationBar";
import Profile from "./BootstrapComponent/Profile";
import Project from "./BootstrapComponent/Projects";
import Contacts from "./BootstrapComponent/Contacts";
import Footer from "./BootstrapComponent/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Profile />
      <About />
      <Project />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
