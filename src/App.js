// import logo from './logo.svg';
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  // const style = {color:'red',fontSize:'47px',textTransform:'uppercase'}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      <Pizza
        name="Pizza Prosciutto"
        photoName="pizzas/prosciutto.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
      />
    </main>
  );
}

function Pizza({name,photoName,ingredients,price}) {
  return (
    <div className="pizza">
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >= openHour && hour <= closeHour){
  //   alert('We are currently open')
  // }else{
  //   alert('Sorry We are closed')
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

export default App;
