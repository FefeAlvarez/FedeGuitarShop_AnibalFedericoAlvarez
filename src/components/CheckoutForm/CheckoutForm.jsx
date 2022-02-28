import { styles } from "./CheckoutForm.styles";
import { IconTick } from "@douyinfe/semi-icons";

export const CheckoutForm = ({
  buyer,
  handleOnChange,
  isDisabled,
  generateOrder,
  totalPrice,
}) => {
  return (
    <div style={styles.formContainer}>
      <h1 style={styles.title}>Buyer Data</h1>
      <div style={styles.formInput}>
        <label>
          Name:
          <br />
          <input
            name="name"
            type="text"
            value={buyer.name}
            onChange={handleOnChange}
            style={styles.input}
          />
        </label>
        <label>
          Surname:
          <br />
          <input
            name="surname"
            type="text"
            value={buyer.surname}
            onChange={handleOnChange}
            style={styles.input}
          />
        </label>
        <label>
          Phone:
          <br />
          <input
            name="phone"
            type="number"
            value={buyer.phone}
            onChange={handleOnChange}
            style={styles.input}
          />
        </label>
        <label>
          e-Mail:
          <br />
          <input
            name="email"
            type="text"
            value={buyer.email}
            onChange={handleOnChange}
            style={styles.input}
          />
        </label>

        <button
          type="submit"
          disabled={isDisabled}
          onClick={() => generateOrder(buyer, totalPrice)}
          style={styles.buttonFinish}
        >
          Click to finish <br />
          <IconTick />
        </button>
      </div>
    </div>
  );
};
