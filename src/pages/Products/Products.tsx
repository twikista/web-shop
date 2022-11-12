import { useState, useEffect } from "react";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { useLocation, useParams } from "react-router-dom";
import { Categories } from "../../components/Categories/Categories";
import {
  fetchError,
  fetchSuccess,
  initFetch,
  setCategories,
} from "../../state/reducers/actionCreators";
import {
  ProductsPageContainer,
  ProductsContainer,
  /*ProductWrapper,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ImageWrapper,
  ProductLink,*/
} from "./Products.styles";
import { ProductCard } from "./ProductCard/ProductCard";

export const Products = () => {
  const { activeCategory } = useParams();

  const {
    state: { products },
  } = useGlobalContext();

  /*
  const setUrl = (apiQuery: string): string => {
    let url = "";
    if (apiQuery === "all") {
      url = "https://fakestoreapi.com/products";
    } else {
      url = `https://fakestoreapi.com/products/category/${query}`;
    }

    return url;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(initFetch());
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        dispatch(fetchSuccess(products));
        console.log(products);
        dispatch(setCategories());
      } catch (error) {
        dispatch(fetchError());
      }
    };

    fetchProducts();
  }, []);
  */
  return (
    <ProductsPageContainer>
      <Categories />
      <ProductsContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ProductsContainer>
    </ProductsPageContainer>
  );
};
