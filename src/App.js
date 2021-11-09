import MemoContainer from "./container/MemoContainer";
import Header from "./container/Header";
import Footer from "./container/Footer";
import "./style/default.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MemoContainer />
      <Footer />
    </div>
  );
}
