import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import "./home.css"; // Ensure this CSS file is correctly linked
import { FaBook, FaBlog, FaUserGraduate, FaEnvelope } from "react-icons/fa";
import arundp from "../../Images/WhatsApp Image 2024-09-02 at 00.02.14_6299cf2e.jpg"
import arunhero from "../../Images/Screenshot 2024-08-24 140540.png"

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="homeLoader-container">
        <PuffLoader color="#000000" size={100} />
      </div>
    );

  return (
    <div className="homePage-container">
      {/* Hero Section */}
      <section className="homePage-hero homePage-animate-fade-in">
        <div className="homePage-hero-content">
          <h1 className="homePage-hero-title">Welcome to Arun Kumar Verma's Portfolio</h1>
          <p className="homePage-hero-subtitle">
            Exploring Innovations in Technology and Research
          </p>
          <img
            src={arunhero}
            alt="Arun Kumar Verma"
            className="homePage-hero-image"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="homePage-about-me homePage-animate-slide-in">
        <h2 className="font-bold mb-4 text-4xl">About Me</h2>
        <div className="homePage-about-content">
          <img
            src={arundp}
            alt="About Arun"
            className="homePage-about-image"
          />
          <p>
            I'm Arun Kumar Verma, a passionate researcher and developer specializing in
            artificial intelligence and machine learning. With a strong background in
            computer science, I thrive on solving complex problems and driving innovation.
            Currently, I'm engaged in developing cutting-edge solutions that bridge the gap
            between technology and real-world applications.
          </p>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="homePage-recent-publications homePage-animate-slide-in">
        <h2>Recent Publications</h2>
        <div className="homePage-publications-list">
          <div className="homePage-publication-item">
            <FaBook className="homePage-icon" />
            <div>
              <a href="#" className="homePage-publication-title">Understanding Deep Learning</a>
              <p>Exploring the depths of neural networks and their applications in various fields.</p>
            </div>
          </div>
          <div className="homePage-publication-item">
            <FaBook className="homePage-icon" />
            <div>
              <a href="#" className="homePage-publication-title">Advancements in AI</a>
              <p>A comprehensive review of recent advancements in artificial intelligence technologies.</p>
            </div>
          </div>
          <div className="homePage-publication-item">
            <FaBook className="homePage-icon" />
            <div>
              <a href="#" className="homePage-publication-title">Machine Learning Techniques</a>
              <p>An in-depth analysis of various machine learning techniques and their effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="homePage-blogs homePage-animate-slide-in">
        <h2>Latest Blogs</h2>
        <div className="homePage-blogs-list">
          <div className="homePage-blog-item">
            <FaBlog className="homePage-icon" />
            <div>
              <a href="#" className="homePage-blog-title">The Future of AI</a>
              <p>Discussing the potential future developments and ethical considerations in AI.</p>
            </div>
          </div>
          <div className="homePage-blog-item">
            <FaBlog className="homePage-icon" />
            <div>
              <a href="#" className="homePage-blog-title">Getting Started with Machine Learning</a>
              <p>A beginner's guide to understanding and implementing machine learning models.</p>
            </div>
          </div>
          <div className="homePage-blog-item">
            <FaBlog className="homePage-icon" />
            <div>
              <a href="#" className="homePage-blog-title">Data Science Trends</a>
              <p>Analyzing the latest trends and tools in the data science landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="homePage-internships homePage-animate-slide-in">
        <h2>Internships</h2>
        <div className="homePage-internships-list">
          <div className="homePage-internship-item">
            <FaUserGraduate className="homePage-icon" />
            <div>
              <strong>Tech Innovators Inc.</strong> - AI Research Intern
              <p>Developed machine learning models to enhance data analysis capabilities.</p>
            </div>
          </div>
          <div className="homePage-internship-item">
            <FaUserGraduate className="homePage-icon" />
            <div>
              <strong>Data Solutions Ltd.</strong> - Data Science Intern
              <p>Assisted in building predictive models and data visualization tools.</p>
            </div>
          </div>
          <div className="homePage-internship-item">
            <FaUserGraduate className="homePage-icon" />
            <div>
              <strong>InnovateX Labs</strong> - Software Development Intern
              <p>Contributed to the development of scalable software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="homePage-contact homePage-animate-fade-in">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations, inquiries, or just a friendly hello!</p>
        <div className="homePage-contact-buttons">
          <a href="/contact" className="homePage-contact-button">
            <FaEnvelope className="homePage-contact-icon" /> Contact Us
          </a>
          <a href="/about" className="homePage-contact-button">
            <FaUserGraduate className="homePage-contact-icon" /> About Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
