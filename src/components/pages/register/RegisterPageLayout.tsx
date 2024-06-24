import React from 'react';
import Header from './ui/Header';
import RegisterForm from './RegisterForm';

const RegisterPageLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      <Header />
      <main className="flex-grow flex flex-col items-center text-center justify-center">
        <div className="flex flex-col bg-white p-10 rounded-xl shadow-sm space-y-2">
          <h1 className="text-4xl font-bold mb-4 text-zinc-700">Create an account</h1>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
};

export default RegisterPageLayout;
