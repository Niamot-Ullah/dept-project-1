
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20 pb-16 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
