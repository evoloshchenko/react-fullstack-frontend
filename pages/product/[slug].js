import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetail";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  //Use State
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext();

  //Fetch Slug
  const { query } = useRouter();

  //Fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  //Extract our data

  const { Title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={Title} />
      <ProductInfo>
        <h3>{Title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQuantity} />
          </button>
          <p>{quantity}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQuantity} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, quantity)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
