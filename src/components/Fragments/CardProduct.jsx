import Button from "../Elements/Button/";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = ({ image, name }) => {
  return (
    <a href="#">
      <img src={image} alt={name} className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white pb-2">
          {title}
        </h5>
        <p className="text-m text-white">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
