import { Link } from "react-router-dom";

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 font-medium text-slate-500">
        Don't have an account?{" "}
        <Link to="/register">
          <span className="text-blue-500 hover:text-blue-600 hover:font-semibold">
            Register
          </span>
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 font-medium text-slate-500">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-blue-500 hover:text-blue-600 hover:font-semibold">
            Login
          </span>
        </Link>
      </p>
    );
  }
};

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex gap-x-3 justify-center bg-teal-50 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export default AuthLayouts;
