import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { init } from 'ityped';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 150,
      backDelay: 2000,
      backSpeed: 100,
      strings: ["I'm a Full Stack Developer,", 'Problem Solver,', 'and a Programming enthusiast.'],
    });
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            <span ref={textRef} />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span>
              <Link to="#about" smooth="true" className="cta-btn cta-btn--hero">
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
