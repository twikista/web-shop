import { useGlobalContext } from "../../state/context/GlobalContext";
import { addItem, decreaseItem } from "../../state/reducers/actionCreators";
import { formatPrice } from "../../utils/formatPrice";
import { formatTitle } from "../../utils/formatTitle";
import {
  MinicartItem,
  ImageWrapper,
  ProductImage,
  ProductDetails,
  TextSpan,
  QuantityWrapper,
  Button,
} from "./CartItem.styles";

type Props = {
  id: number;
  quantity: number;
  price: number;
};
export const CartItem = ({ id, quantity, price }: Props) => {
  const {
    state: { products },
    dispatch,
  } = useGlobalContext();
  const product = products.find((i) => i.id === id);
  return (
    <MinicartItem>
      <ImageWrapper>
        <ProductImage src={`${product?.image}`} alt={product?.title} />
      </ImageWrapper>
      <ProductDetails displayDirection="column">
        <TextSpan textSize="1.4rem" height="40%">
          {formatTitle(product?.title)}
        </TextSpan>
        <TextSpan height="30%" fontWeight="700">
          Price:{formatPrice(price)}
        </TextSpan>
        <QuantityWrapper>
          <Button action="decrease" onClick={() => dispatch(decreaseItem(id))}>
            &#8722;
          </Button>
          <TextSpan alignText="center" color="#f26323">
            {quantity}{" "}
            <span>{`${quantity > 1 ? "items" : "item"} in cart`}</span>
          </TextSpan>
          <Button
            action="increase"
            onClick={() => dispatch(addItem({ id, quantity: 1, price }))}
          >
            &#43;
          </Button>
        </QuantityWrapper>
      </ProductDetails>
    </MinicartItem>
  );
};
