import { useGlobalContext } from "../../state/context/GlobalContext";
import { Categories } from "../../components/Categories/Categories";
import { ProductsPageContainer, ProductsContainer } from "./Products.styles";
import { ProductCard } from "./ProductCard/ProductCard";

export const Products = () => {
  const {
    state: { products },
  } = useGlobalContext();
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
