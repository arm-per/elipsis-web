import { useState } from 'react';

export interface UseAccessibilityInterface {
    fontSize: number;
    theme: 'light' | 'dark';
    readingMode: boolean;
    decreaseFontSize: () => void;
    increaseFontSize: () => void;
    themeToggle: () => void;
    readingModeToggle: () => void;
}

const useAccessibility = (): UseAccessibilityInterface=> {
   const [fontSize, setFontSize] = useState<number>(1);
   const [theme, setTheme] = useState<'light'|'dark'>('light');
   const [readingMode, setReadingMode] = useState<boolean>(false);

   const increaseFontSize = () => {
    if(fontSize < 5){
        setFontSize(prev => prev + 1);
    }
   }

   const decreaseFontSize = () => {
    if(fontSize > 1){
        setFontSize(prev => prev - 1);
    }
   }

   const themeToggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
   }

   const readingModeToggle = () => {
    setReadingMode(prev => !prev);
   }

   return {
    fontSize,
    theme,
    readingMode,
    decreaseFontSize,
    increaseFontSize,
    themeToggle,
    readingModeToggle
   }
}

export {
    useAccessibility
}