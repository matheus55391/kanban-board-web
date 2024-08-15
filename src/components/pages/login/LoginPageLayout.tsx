import React from 'react';
import Header from './ui/Header';
import OrDivider from '../../core/OrDivider';
import GoogleSignInButton from './GoogleSignInButton';
import GithubSignInButton from './GithubSignInButton';


const LoginPageLayout: React.FC = async () => {
  // const session = await auth()
  // if(session?.user) {
  //   redirect('/dashboard')
  // }
  return (
    <div className="flex flex-col h-screen bg-zinc-100">
      <Header />
      <main className="flex-grow flex flex-col items-center text-center justify-center">
        <div className="flex flex-col bg-white p-10 py-16  rounded-xl shadow-sm space-y-2">
          <h1 className="text-4xl font-bold mb-4 text-zinc-700">
            Welcome back!
          </h1>
          <p className='text-sm text-gray-500'>
            Please chose the way you want to sign in to continue.
          </p>
          <GithubSignInButton />
          <OrDivider />
          <GoogleSignInButton />
        </div>
      </main>
    </div>
  );
};

export default LoginPageLayout;
