import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import MyApps from '../components/MyApps';
import SectionFuture from '../components/SectionFuture';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section my_apps">
        <MyApps />
      </section>
      <section className="section cta">
        <CTA />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="section section_future">
        <SectionFuture />
      </section>
       <Footer />
      
    </>
  );
};

export default Home;
