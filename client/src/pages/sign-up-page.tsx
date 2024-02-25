import SignUpForm from "src/widgets/SignUpForm/sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex flex-col grow items-center justify-center">
      <h1 className="text-4xl mb-10">SignUp</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
