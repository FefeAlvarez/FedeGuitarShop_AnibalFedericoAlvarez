import { colors } from "../../globals.styles";
const button = {
  textDecoration: "none",
  color: colors.orange,
  padding: "2em",
  margin: 5,
};
const buttonCheckout = {
  backgroundColor: colors.orangeDark,
  color: colors.orange,
  padding: "2em",
  margin: 5,
  border: `2px ${colors.orange} solid`,
};
const empty = {
  width: "100%",
};
const icon = {
  color: colors.orange,
};
const link = {
  textDecoration: "none",
  color: colors.orange,
};
const linkCheckout = {
  textDecoration: "none",
  color: colors.white,
};
const paragraph = {
  borderRadius: 5,
  border: `1px ${colors.orange} solid`,
  margin: "1em",
  fontWeight: "bold",
};

export const styles = {
  button,
  buttonCheckout,
  empty,
  icon,
  link,
  linkCheckout,
  paragraph,
};
