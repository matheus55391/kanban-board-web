'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginSchema } from '@/schemas';

const LoginForm: React.FC = () => {
  const formMethods = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <form className="space-y-6 w-80">
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
        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-all"
        >
          Log In
        </button>

      </form>
    </FormProvider>
  );
};

export default LoginForm;
