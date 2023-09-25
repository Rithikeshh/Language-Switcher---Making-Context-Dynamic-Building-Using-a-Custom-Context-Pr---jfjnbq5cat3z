"use client"
import { useState } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { LanguageProvider } from '../contexts/LanguageContext';

const Home = () => {
    
    const [language, setLanguage] = useState('en')
    const content = {
        en: {
            welcome: 'Welcome to Next.js!'
        },
        fr: {
            welcome: 'Bienvenue à Next.js!'
        },
        es: {
            welcome: '¡Bienvenido a Next.js!'
        },
        hi: {
            welcome: 'Next.js में आपका स्वागत है!'
        }
        // ... add other languages and translations as needed
    };

    return (
        <LanguageProvider language={language} setLanguage={setLanguage}>
            <div>
                <h1>{content[language].welcome}</h1>
                <LanguageSwitcher />
            </div>
        </LanguageProvider>
    );
};

export default Home;
