import React from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../../state/reducers/types/types";
import { formatPrice } from "../../../utils/formatPrice";
import { formatTitle } from "../../../utils/formatTitle";
import {
  ImageWrapper,
  ProductDetails,
  ProductImage,
  ProductLink,
  PriceWrapper,
  Price,
  ProductTitle,
  ProductTitleWrapper,
  ProductWrapper,
} from "./ProductCard.styles";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  const { activeCategory } = useParams();
  return (
    <ProductLink
      to={`/products/${activeCategory}/${product.id}`}
      key={product.id}
    >
      <ProductWrapper>
        <ImageWrapper>
          <ProductImage
            src={`${product.image}`}
            alt={product.title} /*imageUrl={`${product.image}`*/
          />
        </ImageWrapper>
        <ProductDetails>
          <ProductTitleWrapper>
            <ProductTitle>{formatTitle(product.title)}</ProductTitle>
          </ProductTitleWrapper>
          <PriceWrapper>
            <Price>Price: {formatPrice(product.price)}</Price>
          </PriceWrapper>
        </ProductDetails>
      </ProductWrapper>
    </ProductLink>
  );
};
