import React from "react";
import { SignInForm } from "../_components/sign-in-form";
import { Logo } from "@/components/logo";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-screen bg-[url('/images/bg-login.jpg')] bg-no-repeat bg-cover">
      <Logo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
