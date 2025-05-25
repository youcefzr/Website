'use client';

import React, { useEffect, useState } from 'react';
import { css } from "styled-system/css";

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

export default function TypingText({ text, delay = 0, speed = 50 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, speed, text]);

  return (
    <span className={css({ display: "inline" })}>
      {displayText}
      <span className={css({ opacity: currentIndex < text.length ? 1 : 0, animation: "blink 1s infinite" })}>|</span>
    </span>
  );
}