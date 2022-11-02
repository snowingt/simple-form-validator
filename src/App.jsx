import Card from "./components/Card";
import FormCard from "./components/FormCard";
import Layout from "./containers/Layout";
import { useState } from "react";

function App() {
  const [cardDates, setCardDates] = useState([]);

  const crearDate = (cardDate) => {
    console.log(crearDate);
    setCardDates(cardDate);
  };

  return (
    <div className="App main">
      <Card cardDates={cardDates} />

      <FormCard crearDate={crearDate} />
    </div>
  );
}

export default App;
