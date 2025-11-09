import React, { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">LiteDetect</span>
            </div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a onClick={() => scrollToSection('features')}>Features</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('demo')}>Demo</a></li>
              <li><a onClick={() => scrollToSection('partners')}>Partners</a></li>
              <li><a onClick={() => scrollToSection('sdk')}>SDK</a></li>
              <li><a href="#get-started" className="cta-button">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              AI Text Detection, Explained
            </h1>
            <p className="hero-subtitle">
              Fast, transparent, and precise. LiteDetect analyzes writing style to identify AI-generated content with 97%+ accuracy — no GPU required.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollToSection('demo')}>
                Try Demo
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('sdk')}>
                Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Stylometric DNA</h3>
              <p>
                Analyzes linguistic patterns including sentence rhythm, lexical diversity, and syntactic depth.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Hybrid ML Architecture</h3>
              <p>
                Combines 1D-CNN pattern recognition with Random Forest explainability for transparent results.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>97%+ Accuracy</h3>
              <p>
                &lt;100ms latency with zero GPU requirements. Lightweight for browsers, powerful for enterprise.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Explainable Results</h3>
              <p>
                Every prediction backed by measurable linguistic signals. Complete transparency, no black boxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Usage Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Seamless Integration</h3>
              <p>
                LiteDetect integrates into your workflow in minutes. Deploy as an API, embed in your application, or use our web interface.
              </p>
              
              <div className="use-cases">
                <h4>Use Cases</h4>
                <ul>
                  <li><strong>Education:</strong> Maintain academic integrity</li>
                  <li><strong>Content Moderation:</strong> Scale AI detection</li>
                  <li><strong>Research:</strong> Analyze writing patterns</li>
                  <li><strong>Enterprise:</strong> Transparent, auditable results</li>
                </ul>
              </div>

              <div className="how-it-works">
                <h4>Process</h4>
                <ol>
                  <li>Submit text via API or web interface</li>
                  <li>Analyze linguistic features in real-time</li>
                  <li>Receive detailed results with confidence scores</li>
                  <li>Review stylometric breakdown</li>
                </ol>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="stat-box">
                <div className="stat-number">97%+</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">&lt;100ms</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">0</div>
                <div className="stat-label">GPU Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <h2 className="section-title">Try Demo</h2>
          <p className="section-subtitle">Test AI text detection in real-time</p>
          
          <div className="demo-container">
            <div className="demo-input">
              <label htmlFor="demo-text">Input Text</label>
              <textarea
                id="demo-text"
                placeholder="Paste text to analyze..."
                rows="10"
              ></textarea>
              <button className="btn-primary demo-btn">Analyze</button>
            </div>
            
            <div className="demo-output">
              <h3>Results</h3>
              <div className="result-placeholder">
                <p>Analysis results will appear here</p>
                <div className="result-preview">
                  <div className="result-item">
                    <span className="result-label">AI Probability</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Lexical Diversity</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Syntactic Depth</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Sentence Rhythm</span>
                    <span className="result-value">--</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section id="sdk" className="sdk">
        <div className="container">
          <h2 className="section-title">Developer SDK</h2>
          <p className="section-subtitle">Integrate in minutes with our simple API</p>
          
          <div className="sdk-content">
            <div className="sdk-tabs">
              <button className="tab-button active">Python</button>
              <button className="tab-button">JavaScript</button>
              <button className="tab-button">REST API</button>
            </div>
            
            <div className="code-block">
              <pre>
                <code>{`# Install LiteDetect
pip install litedetect

# Import and use
from litedetect import LiteDetect

detector = LiteDetect(api_key="your_api_key")
result = detector.analyze(text="Your text here")

print(f"AI Probability: {result.probability}")
print(f"Confidence: {result.confidence}")
print(f"Features: {result.features}")`}</code>
              </pre>
            </div>
            
            <div className="sdk-features">
              <h3>SDK Features</h3>
              <ul>
                <li>✓ Simple, intuitive API</li>
                <li>✓ Batch processing support</li>
                <li>✓ Detailed feature extraction</li>
                <li>✓ Real-time streaming analysis</li>
                <li>✓ Comprehensive documentation</li>
                <li>✓ Active community support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <h2 className="section-title">Partnerships</h2>
          <p className="section-subtitle">Built for collaboration and scale</p>
          
          <div className="partnership-types">
            <div className="partnership-card">
              <h3>Enterprise</h3>
              <p>
                Scale AI detection across your organization with dedicated support and custom SLAs.
              </p>
              <ul>
                <li>Priority API access</li>
                <li>Custom model training</li>
                <li>Dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="btn-secondary">Contact Sales</button>
            </div>
            
            <div className="partnership-card">
              <h3>Academic</h3>
              <p>
                Research collaboration with early feature access and contribution opportunities.
              </p>
              <ul>
                <li>Free academic licenses</li>
                <li>Research collaboration</li>
                <li>Dataset access</li>
                <li>Co-publication opportunities</li>
              </ul>
              <button className="btn-secondary">Apply Now</button>
            </div>
            
            <div className="partnership-card">
              <h3>Integration</h3>
              <p>
                Build LiteDetect into your platform with our partner program and revenue sharing.
              </p>
              <ul>
                <li>Revenue sharing</li>
                <li>Technical support</li>
                <li>Co-marketing</li>
                <li>Partner portal</li>
              </ul>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">
                LiteDetect
              </h3>
              <p className="footer-tagline">
                AI Text Detection, Explained
              </p>
              <div className="social-links">
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a onClick={() => scrollToSection('demo')}>Demo</a></li>
                <li><a onClick={() => scrollToSection('sdk')}>SDK</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Developers</h4>
              <ul>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#api-reference">API Reference</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#changelog">Changelog</a></li>
                <li><a href="#status">Status</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('partners')}>Partners</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#research">Research Papers</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#compliance">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 LiteDetect. All rights reserved.</p>
            <p className="footer-note">
              Built with ❤️ for transparency in AI · Fast, Clear, and Built for Trust
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
