import Spacer from "./components/Spacer";
import Footer from "./components/footer/Footer";
import ItemGrid from "./components/grid/ItemGrid";
import Nav from "./components/header/Nav";
import Intro from "./components/intro/Intro";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Nav />
      <Intro />
      <Spacer />
      <ItemGrid />
      <Footer />
    </main>
  );
}
