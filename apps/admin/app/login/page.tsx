import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/forms/login/LoginForm"));

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
