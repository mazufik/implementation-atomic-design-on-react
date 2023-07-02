import { useEffect } from "react";
import FormRegister from "../components/Fragments/FormRegister.jsx";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="mt-4 font-medium text-slate-500">
        Have an account?{" "}
        <Link to="/login">
          <span className="text-blue-500 hover:text-blue-600 hover:font-semibold">
            Login
          </span>
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
