import { useEffect, useState } from "react";
import "./styles.css";

function Cart() {
  const [timeLeft, setTimeLeft] = useState(1000 * 60 * 5);

  useEffect(() => {
    console.log("cart says hi!");
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1000);
    }, 1000);

    const timerOut = setTimeout(() => console.log("Don't waste time"), 10000);

    return () => {
      console.log("cart says bye bye!");
      clearInterval(timer);
      clearInterval(timerOut);
    };
  }, []);
  return <h1> I am cart. Time left: {timeLeft / 1000}</h1>;
}

function WishList() {
  useEffect(() => {
    console.log("list says hi!");
    return () => {
      console.log("list says bye bye!");
    };
  });
  return <h1> I am WishList </h1>;
}
export default function App() {
  const [componentToShow, setShowCompnent] = useState("cart");
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <button onClick={() => setShowCompnent("cart")}> Show Cart </button>
        <button onClick={() => setShowCompnent("list")}> Show WishList </button>
        {componentToShow === "cart" && <Cart />}
        {componentToShow === "list" && <WishList />}
      </div>
    </div>
  );
}
