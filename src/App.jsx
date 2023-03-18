import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
