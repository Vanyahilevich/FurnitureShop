import LoginForm from "src/widgets/LoginForm/login-form";

const LoginPage = () => {
  return (
    <div className="flex flex-col grow items-center justify-center ">
      <h1 className="text-4xl mb-10">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
