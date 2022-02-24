import { useState, useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { styles } from "./pageStyles/checkout.styles";
import { IconTick } from "@douyinfe/semi-icons";

export const Checkout = () => {
  const { totalPrice, cart, cleanCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [showComponent, setShowComponent] = useState(true);
  const [orderId, setOrderId] = useState("");

  const generateOrder = (buyer, totalPrice) => {
    const newOrder = {
      buyer: buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      date: new Date(),
      total: totalPrice,
    };
    const createOrder = async () => {
      const orderRef = await addDoc(collection(db, "orders"), newOrder);
      setOrderId(orderRef.id);
    };
    createOrder();
    cleanCart();
    setShowComponent(false);
  };

  const handleOnChange = (event) => {
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const newDisableButton = [buyer.name, buyer.phone, buyer.email].includes(
      ""
    );
    setIsDisabled(newDisableButton);
  }, [buyer]);
  return showComponent ? (
    <section>
      <h1>Buyer Data</h1>
      <div style={styles.formContainer}>
        <label htmlFor="">
          Name:
          <br />
          <input
            name="name"
            type="text"
            value={buyer.name}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="">
          Phone:
          <br />
          <input
            name="phone"
            type="number"
            value={buyer.phone}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="">
          e-Mail:
          <br />
          <input
            name="email"
            type="text"
            value={buyer.email}
            onChange={handleOnChange}
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
    </section>
  ) : (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <div style={styles.checkoutPhraseContainer}>
          <p>
            <IconTick style={styles.icon} />
            {buyer.name} you've successfully buyed in our store!
          </p>
        </div>
        <br />
        <br />
        <div style={styles.checkoutPhraseContainer}>
          <p>
            Your order ID is "<b>{orderId}</b>", you'll be contacted soon.
          </p>
        </div>
        <br />
        <br />
        <div style={styles.checkoutPhraseContainer}>
          <p>
            Thanks for buying in <b> Fede's Guitars</b>!
          </p>
        </div>
      </div>
    </div>
  );
};
