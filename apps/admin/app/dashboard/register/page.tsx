import dynamic from "next/dynamic";

const SgnUpForm = dynamic(() => import("@/components/forms/signup/SignUpForm"));

const SgnUpPage = () => {
  return <SgnUpForm />;
};

export default SgnUpPage;
