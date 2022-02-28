import { colors } from "../../globals.styles";

const buttonFinish = {
  backgroundColor: colors.orange,
  color: colors.white,
  padding: "2em",
  margin: 5,
  border: `2px ${colors.orange} solid`,
  borderRadius: 10,
};
const formContainer = {
  border: `2px ${colors.orange} solid`,
  padding: "2em",
  borderRadius: 10,
  margin: "2em",
};
const formInput = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const input = {
  border: `2px ${colors.orange} solid`,
  borderRadius: 10,
  padding: 5,
  margin: 5,
};
const title = {
  fontSize: "2em",
  textAlign: "center",
  margin: 5,
};
export const styles = {
  buttonFinish,
  formContainer,
  formInput,
  input,
  title,
};
