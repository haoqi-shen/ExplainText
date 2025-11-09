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
              <span className="title-icon">⚡</span> The Intelligence Behind LiteDetect
            </h1>
            <p className="hero-subtitle">
              What makes LiteDetect different isn't size — it's clarity.
            </p>
            <p className="hero-description">
              Built from cutting-edge research in AI text forensics, it detects machine-generated 
              writing without a giant model or GPU.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollToSection('demo')}>
                Try Demo
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('sdk')}>
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why LiteDetect?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Stylometric DNA</h3>
              <p>
                LiteDetect analyzes the "style fingerprint" of text: sentence rhythm, 
                lexical diversity, syntactic depth.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Hybrid Precision</h3>
              <p>
                A 1D-CNN captures subtle writing patterns, while a Random Forest explains 
                why a piece sounds AI-made.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>
                97%+ Accuracy · 0 GPUs · &lt;100 ms latency — lightweight enough for browsers, 
                powerful enough for enterprise.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Explainable by Design</h3>
              <p>
                Every decision backed by measurable linguistic signals, not hidden probabilities. 
                LiteDetect turns AI detection from a black box into a glass one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Usage Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">How to Use LiteDetect</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Fast, Clear, and Built for Trust</h3>
              <p>
                LiteDetect is designed for seamless integration into your workflow. Whether you're 
                a researcher, educator, content moderator, or enterprise developer, our platform 
                provides the tools you need.
              </p>
              
              <div className="use-cases">
                <h4>Use Cases</h4>
                <ul>
                  <li><strong>Education:</strong> Maintain academic integrity with fast, reliable detection</li>
                  <li><strong>Content Moderation:</strong> Identify AI-generated content at scale</li>
                  <li><strong>Research:</strong> Analyze writing patterns with explainable metrics</li>
                  <li><strong>Enterprise:</strong> Build trust with transparent, auditable results</li>
                </ul>
              </div>

              <div className="how-it-works">
                <h4>How It Works</h4>
                <ol>
                  <li>Submit your text through our API or web interface</li>
                  <li>Our hybrid model analyzes linguistic features in real-time</li>
                  <li>Receive detailed results with confidence scores and explanations</li>
                  <li>Review the stylometric breakdown to understand the decision</li>
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
                <div className="stat-label">Latency</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">0</div>
                <div className="stat-label">GPUs Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <h2 className="section-title">Try LiteDetect Now</h2>
          <p className="section-subtitle">Experience the power of explainable AI detection</p>
          
          <div className="demo-container">
            <div className="demo-input">
              <label htmlFor="demo-text">Paste your text here:</label>
              <textarea
                id="demo-text"
                placeholder="Enter or paste text to analyze..."
                rows="10"
              ></textarea>
              <button className="btn-primary demo-btn">Analyze Text</button>
            </div>
            
            <div className="demo-output">
              <h3>Analysis Results</h3>
              <div className="result-placeholder">
                <p>Results will appear here after analysis</p>
                <div className="result-preview">
                  <div className="result-item">
                    <span className="result-label">Detection Probability:</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Lexical Diversity:</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Syntactic Depth:</span>
                    <span className="result-value">--</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Sentence Rhythm:</span>
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
          <h2 className="section-title">SDK & Integration</h2>
          <p className="section-subtitle">Integrate LiteDetect into your application in minutes</p>
          
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
          <h2 className="section-title">Partnerships & Collaboration</h2>
          <p className="section-subtitle">Join leading organizations using LiteDetect</p>
          
          <div className="partnership-types">
            <div className="partnership-card">
              <h3>🤝 Enterprise Partnership</h3>
              <p>
                Scale AI detection across your organization with dedicated support, 
                custom integration, and SLA guarantees.
              </p>
              <ul>
                <li>Priority API access</li>
                <li>Custom model training</li>
                <li>Dedicated support team</li>
                <li>On-premise deployment options</li>
              </ul>
              <button className="btn-secondary">Contact Sales</button>
            </div>
            
            <div className="partnership-card">
              <h3>🎓 Academic Partnership</h3>
              <p>
                Collaborate on research, get early access to new features, and contribute 
                to the advancement of AI text forensics.
              </p>
              <ul>
                <li>Free academic licenses</li>
                <li>Research collaboration</li>
                <li>Access to datasets</li>
                <li>Co-publication opportunities</li>
              </ul>
              <button className="btn-secondary">Apply Now</button>
            </div>
            
            <div className="partnership-card">
              <h3>💼 Integration Partner</h3>
              <p>
                Build LiteDetect into your platform and provide AI detection to your users 
                with our partner program.
              </p>
              <ul>
                <li>Revenue sharing</li>
                <li>Technical integration support</li>
                <li>Co-marketing opportunities</li>
                <li>Partner portal access</li>
              </ul>
              <button className="btn-secondary">Join Partner Program</button>
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
                <span className="logo-icon">⚡</span> LiteDetect
              </h3>
              <p className="footer-tagline">
                Fast, Explainable AI Text Detection
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
