import React from 'react';
import MainContent from './ui/MainContent';
import Footer from './ui/Footer';
import Header from './ui/header';


const StartPageLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default StartPageLayout;
