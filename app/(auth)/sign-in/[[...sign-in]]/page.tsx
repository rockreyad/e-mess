import React from "react";
import { SignInForm } from "../_components/sign-in-form";
import { Logo } from "@/components/logo";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-screen bg-[url('/images/bg-login.jpg')] bg-no-repeat bg-cover">
      <Logo />
      <SignInForm
        w={{ base: "280px", lg: "350px" }}
        opacity={{ base: "100", lg: "80" }}
        shadow="xl"
        unstyled
        className="bg-[#434459] bg-opacity-20 rounded-2xl shadow-2xl"
      />
    </div>
  );
};

export default SignInPage;
