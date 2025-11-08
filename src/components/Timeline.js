import React, { useEffect, useRef, useState } from 'react';
import './timeline.css';

const Timeline = () => {
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const timelineTop = lineRef.current.getBoundingClientRect().top;
        const timelineHeight = lineRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        let progress = (windowHeight - timelineTop) / (timelineHeight + windowHeight);
        progress = Math.min(Math.max(progress, 0), 1);
        setScrollProgress(progress);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          setVisibleItems((prev) => ({
            ...prev,
            [id]: entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight,
          }));
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-id', index);
        observer.observe(ref);
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const events = [
    {
      date: '29th Jan 2025',
      title: 'Phase 1: Registrations & Idea Submission',
      description: 'Registrations go live and idea submission begins. Get ready to showcase your innovative ideas!',
    },
    {
      date: '10th March 2025',
      title: 'Last Date for Idea Submission',
      description: "Final day to submit your groundbreaking ideas. Don't miss this deadline!",
    },
    {
      date: '12th March 2025',
      title: 'Announcement of Phase 1 Results',
      description: 'The moment of truth! Find out if your idea has been selected for the next phase.',
    },
    {
      date: '27th - 28th March 2025',
      title: 'Phase 2: Hackathon',
      description: 'Get ready for the main event and let the hackathon begin! Show your skills and win exciting prizes!',
    },
    {
      date: '28th March 2025',
      title: 'Hackathon Ends',
      description: 'Time\'s up! and the winner is...',
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-header">
      <h1 className="faq-title">
        <span className="letter">H</span>
        <span className="letter">A</span>
        <span className="letter">C</span>
        <span className="letter">K</span>
        <span className="letter">A</span>
        <span className="letter">T</span>
        <span className="letter">H</span>
        <span className="letter">O</span>
        <span className="letter">N</span>
        <span>&nbsp;</span> 
        <span>&nbsp;</span> 

        <span className="letter">T</span>
        <span className="letter">I</span>
        <span className="letter">M</span>
        <span className="letter">E</span>
        <span className="letter">L</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">E</span>
      </h1>
        <p>Join us on this exciting journey of innovation and creativity. Mark these dates on your calendar and prepare to showcase your skills!</p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" ref={lineRef} style={{ '--progress': `${scrollProgress * 100}%` }}></div>

        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (timelineRefs.current[index] = el)}
            className={`timeline-item ${visibleItems[index] ? 'visible' : ''}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{event.date}</div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;