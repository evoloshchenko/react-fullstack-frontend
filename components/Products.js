import { ProductStyles } from "../styles/productStyle";

export default function Product({ product }) {
  //Extract the info from props
  const { Title, price, image, description } = product.attributes;
  return (
    <ProductStyles>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{Title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </ProductStyles>
  );
}
