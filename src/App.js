import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import News from "./components/News";
import BookTable from "./components/BookTable";
import Chef from "./components/Chef";
import SpecialOffer from "./components/SpecialOffer";
import Story from "./components/Story";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Home />
      <Story />
      <SpecialOffer />
      <Menu />
      <BookTable />
      <Chef />
      <News />
      <Gallery />
      <Footer />
    </div>
  );
}
export default App;
