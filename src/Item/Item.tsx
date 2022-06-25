import Button from "@material-ui/core/Button";
// TypeScript types
import { CartItemType } from "../App";
// Styles import
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    {/* in line arrow function so that the prop can be sent in, or else it will be triggered in right away */}
    <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
