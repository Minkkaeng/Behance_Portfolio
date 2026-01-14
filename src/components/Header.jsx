import { useEffect, useState } from 'react';

function Header({ theme, onToggleTheme }) {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const handleNavClick = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
   };

   return (
      <header id="navbar" className={scrolled ? 'navbar scrolled' : 'navbar'}>
         <div className="nav-container">
            <button type="button" className="brand" onClick={() => handleNavClick('hero')} aria-label="Go to Home">
               Min Kyoung · Portfolio
            </button>

            <nav className="nav-links" aria-label="Primary">
               <button type="button" onClick={() => handleNavClick('hero')}>
                  Home
               </button>
               <button type="button" onClick={() => handleNavClick('about')}>
                  Profile
               </button>
               <button type="button" onClick={() => handleNavClick('skills')}>
                  Skills
               </button>
               <button type="button" onClick={() => handleNavClick('projects')}>
                  Projects
               </button>
               <button type="button" onClick={() => handleNavClick('contact')}>
                  Contact
               </button>
            </nav>

            <button type="button" className="theme-toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
               {theme === 'light' ? '🌙' : '☀️'}
            </button>
         </div>
      </header>
   );
}

export default Header;
