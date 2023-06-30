const Button = ({ children = "Button", classname = "bg-black" }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold ${classname} rounded-md bg-black text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
