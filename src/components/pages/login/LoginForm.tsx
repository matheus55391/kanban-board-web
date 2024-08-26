"use client";
import { FormError } from "@/components/core/alerts/FormError";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import * as z from "zod";

const LoginForm: React.FC = () => {

  const formMethods = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "user@example.com",
      password: "string",
    },
  });

  const fetchLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await axios.post("/Auth/Login", {
      email: email,
      
      password: password,
    });
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: fetchLogin,
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    mutation.mutate(data);
  };

  const errorMessage =
    formMethods.formState.errors.email?.message ||
    formMethods.formState.errors.password?.message;

  return (
    <FormProvider {...formMethods}>
      <form
        className="space-y-6 w-80"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Email Address</span>
          <input
            type="email"
            id="email"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your email"
            disabled={mutation.isPending}
            {...formMethods.register("email")}
          />
        </div>
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Password</span>
          <input
            type="password"
            id="password"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your password"
            disabled={mutation.isPending}
            {...formMethods.register("password")}
          />
        </div>
        <div>
          <FormError message={errorMessage} />
        </div>
        <button
          type="submit"
          className={`w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-all flex justify-center items-center ${mutation.isPending ? "opacity-80 cursor-not-allowed" : ""}`}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <CgSpinner className="animate-spin" size={20} color="black" />
          ) : (
            "Log In"
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
