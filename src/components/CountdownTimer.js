import React, { useState, useEffect } from 'react';

const styles = {
  headerContainer: {
    minHeight: '100vh',
    backgroundColor: '#4CAF50',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: 'white',
    textAlign: 'center'
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  subTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '2rem'
  },
  registerButton: {
    backgroundColor: 'white',
    color: '#4CAF50',
    padding: '0.75rem 2rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginBottom: '2rem',
    transition: 'background-color 0.3s'
  },
  registrationText: {
    fontSize: '1.125rem',
    marginBottom: '1rem'
  },
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
  },
  calendarNumber: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0.5rem'
  },
  calendarCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '5rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  calendarHeader: {
    backgroundColor: '#dc2626',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    padding: '0.25rem',
    textAlign: 'center',
    width: '100%'
  },
  calendarValue: {
    color: '#1f2937',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    padding: '1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const CalendarNumber = ({ number, label }) => (
  <div style={styles.calendarNumber}>
    <div style={styles.calendarCard}>
      <div style={styles.calendarHeader}>
        {label}
      </div>
      <div style={styles.calendarValue}>
        {number.toString().padStart(2, '0')}
      </div>
    </div>
  </div>
);

const Header = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-03-11T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div style={styles.countdownContainer}>
        <CalendarNumber number={timeLeft.days} label="DAYS" />
        <CalendarNumber number={timeLeft.hours} label="HOURS" />
        <CalendarNumber number={timeLeft.minutes} label="MINS" />
        <CalendarNumber number={timeLeft.seconds} label="SECS" />
      </div>
    </div>
  );
};

export default Header;