import Button from "./components/button.js";
import Greeting from "./components/greeting.js";
import ProductList from "./components/product";
import BookList from "./components/book";
import ClothesList from "./components/clothes";
import NameForm from "./components/form";
import Counter from "./components/count";
import Forms from "./components/forms";
import TestFetch from "./components/testFetch.js";
import SearchAPI from "./components/searchAPI.js";

function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="App">
      <SearchAPI />
      <TestFetch />
      <h1>cc pp</h1>
      <Button onClick={handleClick} label="Click me" />
      <Greeting name="Oussama" username="_pp" />
      <ProductList />
      <h1>My Book List</h1>
      <BookList />
      <ClothesList />
      <h1>Form Example</h1>
      <NameForm />
      <Counter />
      <Forms />
    </div>
  );
}

export default App;
