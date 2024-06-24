import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 p-6 text-center flex flex-row space-x-2 w-screen">
      <p className="text-sm mr-auto">© 2024 KanbanBoard. All rights reserved.</p>
      <p className="text-sm">Built with ♥</p>
    </footer>
  );
};

export default Footer;
