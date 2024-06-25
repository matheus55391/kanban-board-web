import React from 'react';
import Link from 'next/link';
import SignUpLinkButton from '@/components/SignUpLinkButton';

const Header: React.FC = () => {
  return (
    <header className="text-black p-4 md:px-14 flex justify-between items-center">
      <h1 className="text-2xl font-bold">KanbanBoard</h1>
      <div className="flex gap-4">
        <div className="text-black border rounded-xl p-1 px-1 flex flex-row space-x-1 text-sm">
          <Link href="/login">
            <button className="hover:bg-gray-200 p-2 rounded-xl px-2 transition-all text-sm font-medium">
              Log in
            </button>
          </Link>
          <SignUpLinkButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
