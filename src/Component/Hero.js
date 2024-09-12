import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 1500;

  useEffect(() => {
    const word = words[index % words.length];
    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          if (prev === '') {
            setIsDeleting(false);
            setIndex(index + 1);
            return '';
          }
          return prev.slice(0, -1);
        } else {
          if (prev === word) {
            setTimeout(() => setIsDeleting(true), delay);
            return prev;
          }
          return word.slice(0, prev.length + 1);
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Alex Smith</h2>
        <p>
          I'm <span>{currentText}</span>
          <span className="typed-cursor">|</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
