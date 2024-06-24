import React from 'react';

const OAuthLoginButton: React.FC = () => {
  return (
    <form>
      <button
        type="submit"
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-md transition-all"
      >
        Log In with Google
      </button>
    </form>
  );
};

export default OAuthLoginButton;
