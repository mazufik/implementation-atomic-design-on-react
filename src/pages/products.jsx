import CardProduct from "../components/Fragments/CardProduct.jsx";
import Product1 from "../assets/images/shoes-1.jpg";
import Product2 from "../assets/images/shoes-2.jpg";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image={Product1} name="Product1" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta
          exercitationem facere, illo tenetur explicabo excepturi natus
          recusandae deserunt, ad nulla quas saepe minus nemo fugiat laborum?
          Quaerat, nostrum perspiciatis!
        </CardProduct.Body>
        <CardProduct.Footer price="$ 765" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image={Product2} name="Product2" />
        <CardProduct.Body title="New Shoes 2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          rem iste quam excepturi aspernatur dicta odit nam laborum odio vel
          dignissimos ipsa labore voluptates cupiditate, laboriosam quas
          doloribus quos nulla!
        </CardProduct.Body>
        <CardProduct.Footer price="$ 843" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
