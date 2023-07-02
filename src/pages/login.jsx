import { useEffect } from "react";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-4 font-medium text-slate-500">
        Don't have an account?{" "}
        <Link to="/register">
          <span className="text-blue-500 hover:text-blue-600 hover:font-semibold">
            Register
          </span>
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
