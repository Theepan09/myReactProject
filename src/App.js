import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Sidepanel from './Component/Sidepanel';
import Portfolio from './Component/Portfolio';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';



function App() {
  return (
    <div className="index-page">
      <Header />
      <Sidepanel/>
      <main className="main">
        <Hero />
        <About />
        <Portfolio/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
