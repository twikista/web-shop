import { Button } from "./ActionButton.styles";

type Props = {
  width: string;
  height: string;
  marginTop: string;
  borderColor: string;
  children: React.ReactNode;
};

export const ActionButton = (props: Props) => {
  return <Button {...props}>{props.children}</Button>;
};
