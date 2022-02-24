import { colors } from "../../globals.styles";

const buttonFinish = {
  backgroundColor: colors.white,
  color: colors.orangeDark,
  padding: "2em",
  margin: 5,
  border: `2px ${colors.orange} solid`,
};

const card = {
  border: `2px ${colors.orange} solid`,
  borderRadius: "1em",
  padding: "1em",
};
const cardContainer = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const checkoutPhraseContainer = {};

const formContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "end",
};
const icon = {
  color: "green",
  margin: "5px",
};
export const styles = {
  buttonFinish,
  card,
  cardContainer,
  checkoutPhraseContainer,
  formContainer,
  icon,
};
