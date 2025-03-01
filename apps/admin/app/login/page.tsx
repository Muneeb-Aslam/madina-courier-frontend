import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/forms/login/LoginForm"));

export const metadata: Metadata = {
  title: "Login - Madina Courier",
};

const LoginPage = () => {
  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center bg-secondary p-spacing-l sm:p-0">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
