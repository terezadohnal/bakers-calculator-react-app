import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Page from "./components/Page/Page";
import Card from "./components/UI/Card/Card";
import classes from "./App.module.css";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Layout>
        <Page>
          <Card>
            <CalculatorForm />
          </Card>
          <Card />
        </Page>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
