import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Juhayer Islam</h1>
        <h2>Engineering Student &amp; Future Engineer</h2>
      </header>
      <nav className="portfolio-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <section id="about" className="portfolio-section">
          <h3>About Me</h3>
          <p>
            I am an engineering student passionate about technology, problem-solving, and building innovative solutions. Welcome to my portfolio!
          </p>
        </section>
        <section id="projects" className="portfolio-section">
          <h3>Projects</h3>
          <ul>
            <li>Project 1: Description of your first project.</li>
            <li>Project 2: Description of your second project.</li>
            <li>Project 3: Description of your third project.</li>
          </ul>
        </section>
        <section id="contact" className="portfolio-section">
          <h3>Contact</h3>
          <p>Email: your.email@example.com</p>
        </section>
      </main>
      <footer className="portfolio-footer">
        &copy; {new Date().getFullYear()} Juhayer Islam
      </footer>
    </div>
  );
}

export default App;
