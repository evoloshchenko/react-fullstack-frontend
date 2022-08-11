import { ProductStyles } from "../styles/productStyle";
import Link from "next/link";

export default function Product({ product }) {
  //Extract the info from props
  const { Title, price, image, description, slug } = product.attributes;
  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{Title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </ProductStyles>
  );
}
