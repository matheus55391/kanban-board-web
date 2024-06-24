import React from 'react';

const OAuthRegisterButton: React.FC = () => {
  return (
    <form>
      <button
        type="submit"
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-md transition-all"
      >
        Sign Up with Google
      </button>
    </form>
  );
};

export default OAuthRegisterButton;
