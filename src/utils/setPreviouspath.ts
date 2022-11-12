export const setPrevPath = (cartIsOpen: boolean, pathname: string) => {
  let prevPath = "";
  if (cartIsOpen === false) {
    prevPath = pathname;
  } else {
    prevPath = "";
  }
  return prevPath;
};
