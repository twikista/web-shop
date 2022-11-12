export const formatTitle = (title: string | undefined): string | undefined => {
  if (title && title.length > 12) {
    const titleArray = title
      .split(" ")
      .slice(0, 8)
      .filter((item) => item.length < 14);
    const newTitle = titleArray.join(" ");
    return newTitle;
  }
  return title;
};

/*
export const formatTitle = (title: string | undefined): string | undefined => {
  if (title && title.length > 12) {
    const titleArray = title.split(" ").slice(0, 8);
    const newTitle = titleArray.join(" ");
    return newTitle;
  }
  return title;
};

*/
