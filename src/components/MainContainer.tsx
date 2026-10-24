import Navbar from "./Navbar";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";
import Showcase from "./Showcase";
import FeaturedProjects from "./FeaturedProjects";
import TechStack from "./TechStack";
import Career from "./Career";
import Testimonials from "./Testimonials";
import NewsletterContact from "./NewsletterContact";
import Footer from "./Footer";
import Cursor from "./Cursor";

const MainContainer = () => {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />

      {/* Main Page Flow - 100% Native High-Performance Smooth Scroll */}
      <main className="main-content-flow">
        {/* 1. Hero Section */}
        <Landing />

        {/* 2. Services Section */}
        <Services />

        {/* 3. About Section */}
        <About />

        {/* 4. Showcase Section */}
        <Showcase />

        {/* 5. Featured Projects Section */}
        <FeaturedProjects />

        {/* 6. Core Tech Stack Section */}
        <TechStack />

        {/* 7. Career & Experience Section */}
        <Career />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ & Newsletter Section */}
        <NewsletterContact />

        {/* 10. Footer Section */}
        <Footer />
      </main>
    </div>
  );
};

export default MainContainer;
