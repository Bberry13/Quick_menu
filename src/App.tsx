import {useState} from "react";
import Header from "./components/features/Header/Header";
import HeroSection from "./components/features/HeroSection/HeroSection";
import Navigation from "./components/features/Navigation/Navigation";
import Main from "./components/features/Main/Main";
import Stocks from './components/features/Stocks/Stocks'

function App() {
  const [activeTab, setActiveTab] = useState <"main" | "promotions">("main");

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === `main` ? <Main /> : <Stocks /> }
    </div>
  );
}

export default App;
