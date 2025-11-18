import UserListComponent from "./components/exercises/userList.component";
import EffectExampleComponent from "./components/effect.example";
import MovieListComponent from "./components/exercises/movie.list.component";
import ProfileCardComponent from "./components/exercises/profile.card.component";
import ToogleLightDarkComponent from "./components/exercises/tooglelightdark.component";
import CounterExcercise3Component from "./components/exercises/counter.exercise3.component";
import InputMirrorComponent from "./components/exercises/input.mirror.component";
import GreetingMessageComponent from "./components/exercises/greeting.message.component";
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
      <hr />
      <GreetingMessageComponent />
      <hr />
      <InputMirrorComponent />
      <hr />
      <CounterExcercise3Component />
      <hr />
      <ToogleLightDarkComponent />
      <hr />
      <ProfileCardComponent />
      <hr />
      <MovieListComponent />
      <hr />
      <EffectExampleComponent />
      <hr />
      <UserListComponent />
    </div>
  );
}

export default App;
