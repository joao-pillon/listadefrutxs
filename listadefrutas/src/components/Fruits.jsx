import Fruit from "./Fruit";
import "./styles.css";
import TotalPrice from "./TotalPrice";


const Fruits = ({ fruits, setFruits }) => {
  function filterRedFruits(input) {
    const filtered = input.filter((fructose) => {
      return fructose.color === "red";
    });
    console.log(filtered)
    setFruits([...filtered]);
  }

  return (
    <>
      <TotalPrice fruits={fruits} />
      <ul>
        <div className="Fruits">
          {fruits.map((fruit) => {
            return (
              <>
                <li>
                  <Fruit key={fruit.name} fruit={fruit} />
                </li>
              </>
            );
          })}
        </div>
      </ul>
      <button
        onClick={() => {
          filterRedFruits(fruits);
        }}
      >
        Show red fruits
      </button>
    </>
  );
};

export default Fruits;
