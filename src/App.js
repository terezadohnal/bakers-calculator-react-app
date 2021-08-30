import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
