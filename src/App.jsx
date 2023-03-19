import Expenses from "./components/Expenses";

document.body.style.backgroundColor = 'lightgray';

function App() {
  const expenses = [
    { id: "1", title: "BMW", amount: 450, date: new Date(2006, 3, 10) },
    { id: "2", title: "audi", amount: 450, date: new Date(2006, 3, 10) },
    { id: "3", title: "mecka", amount: 450, date: new Date(2006, 3, 10) },
    {
      id: "4",
      title: "nissan navara",
      amount: 450,
      date: new Date(2006, 3, 10),
    },
  ];

  return (
    <div>
      <h1>Hello react</h1>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
