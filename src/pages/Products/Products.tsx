import { useGlobalContext } from "../../state/context/GlobalContext";
import { Categories } from "../../components/Categories/Categories";
import { ProductsPageContainer, ProductsContainer } from "./Products.styles";
import { ProductCard } from "./ProductCard/ProductCard";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";

export const Products = () => {
  const {
    state: { products, isLoading, isError },
  } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <LoadingIndicator loadingText="Loading products..." />
      ) : isError ? (
        <LoadingIndicator loadingText="Something went wrong. Please try again" />
      ) : (
        <ProductsPageContainer>
          <Categories />
          <ProductsContainer>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ProductsContainer>
        </ProductsPageContainer>
      )}
    </>
  );
};
