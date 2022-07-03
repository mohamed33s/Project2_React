import "./App.css";
import Head from "./Compunent/Head";
import Card from "./Compunent/Cards.js";
import CardInfo from "./Compunent/CardInfo.js"

function App() {
    let Cards = CardInfo.map((cards) => {
      return <Card cards={cards} />;
    });
  return (
    <>
      <Head />
      <div className="App">{Cards}</div>
    </>

  );
}

export default App;
