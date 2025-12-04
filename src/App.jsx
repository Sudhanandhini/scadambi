import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// MAIN WEBSITE Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PRE-PRIMARY Components
import PrePrimaryHeader from './pages/pre-primary/PrePrimaryHeader';
import PrePrimaryFooter from './pages/pre-primary/PrePrimaryFooter';

// MAIN WEBSITE Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// PRE-PRIMARY Pages
import PrePrimaryHome from './pages/pre-primary/PrePrimaryHome';
import PrePrimaryAbout from './pages/pre-primary/PrePrimaryAbout';
import PrePrimaryAcademic from './pages/pre-primary/PrePrimaryAcademic';
import PrePrimaryFacilities from './pages/pre-primary/PrePrimaryFacilities';
import PrePrimaryActivities from './pages/pre-primary/PrePrimaryActivities';
import PrePrimaryNews from './pages/pre-primary/PrePrimaryNews';
import PrePrimaryAdmissions from './pages/pre-primary/PrePrimaryAdmissions';
import PrePrimaryContact from './pages/pre-primary/PrePrimaryContact';

// Simple ScrollToTop component to reset scroll on route change
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper that switches between main and pre-primary layouts
const Layout = ({ children }) => {
  const location = useLocation();
  const isPrePrimary = location.pathname.startsWith('/pre-primary');

  return (
    <div className="min-h-screen bg-background font-sans text-text selection:bg-secondary selection:text-primary">
      {/* Show PrePrimaryHeader for pre-primary routes, Navbar for main routes */}
      {isPrePrimary ? <PrePrimaryHeader /> : <Navbar />}
      
      {/* Page content */}
      <main>
        {children}
      </main>
      
      {/* Show PrePrimaryFooter for pre-primary routes, Footer for main routes */}
      {isPrePrimary ? <PrePrimaryFooter /> : <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router basename="/scadambi">
      <ScrollToTopWrapper />
      <Layout>
        <Routes>
          {/* MAIN WEBSITE ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* PRE-PRIMARY SECTION ROUTES */}
          <Route path="/pre-primary" element={<PrePrimaryHome />} />
          <Route path="/pre-primary/about" element={<PrePrimaryAbout />} />
          <Route path="/pre-primary/academic" element={<PrePrimaryAcademic />} />
          <Route path="/pre-primary/facilities" element={<PrePrimaryFacilities />} />
          <Route path="/pre-primary/activities" element={<PrePrimaryActivities />} />
          <Route path="/pre-primary/news" element={<PrePrimaryNews />} />
          <Route path="/pre-primary/admissions" element={<PrePrimaryAdmissions />} />
          <Route path="/pre-primary/contact" element={<PrePrimaryContact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;