// ! Import Libraries
//import SearchPriceComponent from "./component/example_writeAlong/search.price.component"; // * EXAMPLE
//import SearchUsersComponent from "./component/example_writeAlong/search.users.component"; // * EXAMPLE
import LittleFruitListComponent from "./component/excercise/little.fruitList.component"; // ! EXERCISE
import CategoryFilterComponent from "./component/excercise/category.filter.component";
// ! Import Libraries
function App() {
  return (
    <div className="">
      <h1>React Derived State Examples</h1>
      // * Closed Example
      {/*<SearchPriceComponent />
      <SearchUsersComponent /> */}
      // * Closed Example
      <hr />
      <h1>Exercise</h1>
      <LittleFruitListComponent />
      <hr />
      <CategoryFilterComponent />
      <hr />
    </div>
  );
}

export default App;
