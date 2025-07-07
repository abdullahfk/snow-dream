"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ArrowDown, Menu, X } from "lucide-react"
import "./App.css"



const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

const welcomeTexts = [
  "Welcome",
  "환영",
  "Benvenuto !",
  "いらっしゃいませ",
  "欢迎",
  "स्वागत",
  "Willkommen!",
  "¡Bienvenido",
  "Bem-vindo",
  "مرحبا بك",
  "Bienvenue !",
  "Welcome",
  "환영",
  "Benvenuto !",
  "いらっしゃいませ",
  "欢迎",
  "स्वागत",
  "Willkommen!",
]

const projects = [
  {
    id: 1,
    title: "Happr",
    description: "Happr is a unique happiness-obsessed personal...",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "ZOA",
    description: "ZOA provides a complete solution for veterinary...",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Safar Cart",
    description: "Safar Cart ist ein funktionsreiches Reiseprogramm...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Try Boosting",
    description: "Try Boosting is a game service provider that sup...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Al-Nabwi Travels",
    description: "Al-Nabwi Travels needed a comprehensive solution...",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with advanced features...",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
]

function App() {
  const [currentLang, setCurrentLang] = useState("en")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Background Video */}
      <div className="video-background">
        <video ref={videoRef} autoPlay muted loop playsInline className="background-video">
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Sliding Welcome Messages */}
      <div className="welcome-slider">
        <div className="welcome-track">
          {[...welcomeTexts, ...welcomeTexts].map((text, index) => (
            <span key={index} className="welcome-text">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Header Controls */}
      <header className="header-controls">
        <div className="language-selector">
          <button className="lang-button" onClick={() => setIsLangOpen(!isLangOpen)}>
            {currentLang.toUpperCase()} <ChevronDown size={16} />
          </button>
          {isLangOpen && (
            <div className="lang-dropdown open">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code)
                    setIsLangOpen(false)
                  }}
                  className={`lang-option ${currentLang === lang.code ? "active" : ""}`}
                >
                  <span>{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} className="close-icon" /> : <Menu size={24} className="menu-icon" />}
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          <div className="menu-logo">
            <span className="logo-text">snow dream studios</span>
          </div>
          <nav className="menu-nav">
            <a href="#home" className="menu-link active" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#work" className="menu-link" onClick={() => setIsMenuOpen(false)}>
              Work
            </a>
            <a href="#services" className="menu-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
            <a href="#blogs" className="menu-link" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </a>
          </nav>
          <div className="menu-footer">
            <p>https://snowdreamstudios.ch</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Left Side - Branding and Social */}
          <div className="left-content">
            <div className="logo-box" id="logoBox">
  <h1 className="brand-title">
    <span className="line">snow</span><br />
    <span className="line">dream</span><br />
    <span className="line studio">studio</span>
  </h1>
</div>

            <div className="social-links">
              <a href="#" className="social-link">
                <span>Be</span>
              </a>
              <a href="#" className="social-link">
                <span>in</span>
              </a>
              <a href="#" className="social-link">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link">
                <span>f</span>
              </a>
              <a href="#" className="social-link">
                <span>📷</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <span>Scroll Down</span>
              <div className="scroll-arrow">
                <ArrowDown size={20} />
              </div>
            </div>
          </div>

          {/* Right Side - Project Slider and Description */}
          <div className="right-content">
            {/* Cyan Accent Dot */}
            <div className="accent-dot"></div>

            {/* Project Carousel using react-slick */}
<div className="carousel-wrapper">
  <div className="slider-track">
    {[...projects, ...projects].map((project, index) => (
      <div key={index} className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Agency Description */}
            <div className="agency-description">
              <p>
                <span className="highlight">A Swiss-based digital agency</span> transforming brand ideas into powerful
                digital realities. Helping businesses in Zürich and across Switzerland achieve measurable growth through
                design, development, and strategy.
              </p>
              <button className="contact-button">Contact Us →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
