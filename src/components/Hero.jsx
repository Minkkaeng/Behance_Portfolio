// src/components/Hero.jsx
function Hero() {
   return (
      <div className="hero-inner">
         <div className="hero-left">
            <p className="hero-kicker">Frontend Developer · React · UI Architecture</p>

            <h1>
               서비스 흐름을 이해하고
               <br />
               <span>구조적으로 구현하는 프론트엔드</span>
            </h1>

            <p className="hero-lead">
               React 기반 SPA에서 컴포넌트 설계·라우팅·상태 흐름을 정리하고,
               <br />
               유지보수 가능한 UI를 만드는 데 집중한다.
            </p>

            <div className="hero-actions">
               <a href="#projects" className="btn-primary">
                  View projects
               </a>
               <a href="#contact" className="btn-ghost">
                  Contact
               </a>
            </div>

            <div className="hero-tags">
               <span className="tag">React · Router · Vite</span>
               <span className="tag">HTML · CSS · JS</span>
               <span className="tag">Git · 배포 경험</span>
            </div>
         </div>

         <div className="hero-right">
            <div className="hero-card hero-card-main">
               <p className="hero-label">Strength</p>
               <p className="hero-main-text">
                  Component-first
                  <br />
                  Structure & Maintainability
               </p>
            </div>

            <div className="hero-grid-small">
               <div className="hero-card small">
                  <span className="pill">Play Farm</span>
                  <p>팀 프로젝트 · 서비스 흐름/관리자 CRUD</p>
               </div>
               <div className="hero-card small">
                  <span className="pill">Planify</span>
                  <p>React 앱 · 상태/데이터 유지(로컬)</p>
               </div>
               <div className="hero-card small">
                  <span className="pill">Airbnb</span>
                  <p>UX 리디자인 · 검색/필터 UI</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Hero;
