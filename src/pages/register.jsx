import { useEffect } from "react";
import FormRegister from "../components/Fragments/FormRegister.jsx";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
