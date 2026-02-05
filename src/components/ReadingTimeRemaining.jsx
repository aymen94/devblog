import { useState, useEffect } from 'react';

export function ReadingTimeRemaining({ totalReadingTime }) {
  const [timeRemaining, setTimeRemaining] = useState(totalReadingTime);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const totalMinutes = parseInt(totalReadingTime) || 5;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      
      const remaining = Math.ceil(totalMinutes * (1 - scrollPercent));
      setTimeRemaining(`${remaining} min`);
      setIsVisible(scrollPercent > 0.1 && scrollPercent < 0.95);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalReadingTime]);

  if (!isVisible) return null;

  return (
    <div className="reading-time-remaining">
      ⏱️ {timeRemaining} left
    </div>
  );
}
