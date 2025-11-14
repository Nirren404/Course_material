import ListComponent from "./components/list.component";
import ContactFormComponent from "./components/contact.form.component";
import AgeCounterComponent from "./components/age.counter.component";
import Counter from "./components/counter.component";
import MyInput from "./components/input.component";
import LikeButtonComponent from "./components/like.button.component";
function App() {
  return (
    <div className="">
      <h1>State in react</h1>
      <hr />
      <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactFormComponent />
      <hr />
      <ListComponent />
    </div>
  );
}

export default App;
