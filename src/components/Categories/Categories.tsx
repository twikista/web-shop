// import { NavWrapper, NavList, NavListItem } from "../NavBar/NavBar.styles";
import { CategoryWrapper, NaVLinks, StyledNavLink } from "./Categories.styles";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { setApiUrl } from "../../state/reducers/actionCreators";
import uniqid from "uniqid";

export const Categories = () => {
  const {
    state: { categories },
    dispatch,
  } = useGlobalContext();

  // const setUrl = (apiQuery: string): string => {
  //   let url = "";
  //   if (apiQuery === "all") {
  //     url = "https://fakestoreapi.com/products";
  //   } else {
  //     url = `https://fakestoreapi.com/products/category/${query}`;
  //   }
  // console.log("cat")
  const apiQuery = (activeCategory: string) => {
    if (activeCategory === "all") {
      dispatch(setApiUrl("https://fakestoreapi.com/products"));
      return;
    }
    dispatch(
      setApiUrl(`https://fakestoreapi.com/products/category/${activeCategory}`)
    );
  };
  return (
    <CategoryWrapper>
      {categories.map((category) => {
        return (
          <NaVLinks key={uniqid()}>
            <StyledNavLink
              to={`/products/${category}`}
              onClick={() => apiQuery(category)}
            >
              {category}
            </StyledNavLink>
          </NaVLinks>
        );
      })}
    </CategoryWrapper>
  );
};
