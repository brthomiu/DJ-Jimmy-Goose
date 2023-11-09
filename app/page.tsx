import Spacer from "./components/Spacer";
import SpacerSmall from "./components/SpacerSmall"
import Footer from "./components/footer/Footer";
import ItemGrid from "./components/grid/ItemGrid";
import Nav from "./components/header/Nav";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import MNav from "./components/header/MNav";
import MIntro from "./components/intro/MIntro";
import MItemGrid from "./components/grid/MItemGrid";
import './views.css';
import MContact from "./components/contact/MContact";
import MFooter from "./components/footer/MFooter";

export default function Home() {
  return (
    <main className="grid grid-flow-rows gap-24 scroll-smooth overflow-x-hidden">
      <div className="DesktopView">
      <Nav />
      <Intro />
      <Spacer />
      <Spacer />
      <ItemGrid />
      <SpacerSmall />
      <Contact />
      <Footer />
      </div>
      <div className="MobileView">
      <MIntro />
      <MItemGrid />
      <MContact />
      <MFooter />
      <MNav />
      </div>
    </main>
  );
}
