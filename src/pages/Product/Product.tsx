import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { addItem } from "../../state/reducers/actionCreators";
import {
  ImageWrapper,
  MainContent,
  ProductContainer,
  ProductImage,
  ProductTitle,
  TitleWrapper,
  LabelText,
  PriceWrapper,
  PriceText,
  ProductDetails,
  ActionsWrapper,
  QuantityWrapper,
  Button,
  Input,
  QuantityInput,
  AddToCartButton,
  ProductDetailsTop,
  ProductDetailsBottom,
  ProductDescription,
} from "./Product.styles";
import { formatTitle } from "../../utils/formatTitle";

type Quantity = number | string;

export const Product = () => {
  const initialState: number = 1;
  const [quantity, setQuantity] = useState<Quantity>(initialState);
  const {
    state: { products },
    dispatch,
  } = useGlobalContext();
  const { productId } = useParams();
  const product = products.find((item) => item.id.toString() === productId);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    +value < 1 ? setQuantity("") : setQuantity(+value);
  };
  return (
    <ProductContainer>
      <TitleWrapper>
        <ProductTitle>{formatTitle(product?.title)}</ProductTitle>
      </TitleWrapper>
      <MainContent>
        <ImageWrapper>
          <ProductImage src={`${product?.image}`} alt={product?.title} />
        </ImageWrapper>
        <ProductDetails>
          <ProductDetailsTop>
            <PriceWrapper>
              <LabelText>Price</LabelText>
              <PriceText>${product?.price}</PriceText>
            </PriceWrapper>
          </ProductDetailsTop>
          <ProductDetailsBottom>
            <ProductDescription>
              <LabelText>Decsription</LabelText>
              <p>{product?.description}</p>
            </ProductDescription>
            <ActionsWrapper>
              <QuantityWrapper>
                <LabelText>Quantity</LabelText>
                <QuantityInput>
                  <Button
                    onClick={() => {
                      quantity > 1 && setQuantity(+quantity - 1);
                    }}
                    action="decrease"
                  >
                    &#8722;
                  </Button>
                  <Input
                    type="text"
                    value={quantity}
                    onChange={onChangeHandler}
                  />
                  <Button
                    onClick={() => {
                      setQuantity(+quantity + 1);
                    }}
                    action="increase"
                  >
                    &#43;
                  </Button>
                </QuantityInput>
              </QuantityWrapper>
              <AddToCartButton
                onClick={() => {
                  dispatch(
                    addItem({
                      id: product?.id || 0,
                      quantity: +quantity,
                      price: product?.price || 0,
                    })
                  );
                  setQuantity(initialState);
                }}
              >
                Add to cart
              </AddToCartButton>
            </ActionsWrapper>
          </ProductDetailsBottom>
        </ProductDetails>
      </MainContent>
    </ProductContainer>
  );
};
