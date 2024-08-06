import React from 'react';
import OrDivider from '@/components/core/OrDivider';
import OAuthRegisterButton from './OAuthRegisterButton';

const RegisterForm: React.FC = () => {
  return (
    <div className="w-80">
      <div className="space-y-6">
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Name</span>
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Email Address</span>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Password</span>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-all">
          Sign Up
        </button>
        <OrDivider />
        <OAuthRegisterButton />
      </div>
    </div>
  );
};

export default RegisterForm;
