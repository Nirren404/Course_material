import InteractiveList from "./components/event-handlers_hugeExcercise/interactivelist";
import TogglingUI from "./components/event-handlers_hugeExcercise/toggling.ui";
import CustomButton from "./components/event-handlers_hugeExcercise/custombutton";
// import StatusLightComponent from "./components/exercises/status.light.component";
// import LoggedInGreetingComponent from "./components/exercises/loggedin.greeting.component";
// import UseCard from "./components/exercises/usecard";
// import PracticePersonalGreetingCard from "./components/exercises/practice.personalgreeting.card";
// import FocusInputComponent from "./components/exercises/focusinput.component";
//import PreviousValue from "./components/useref.Examples/previous.value";
//import RenderCount from "./components/useref.Examples/render.counter";
//import InputFocus from "./components/useref.Examples/input.focus";
// import UserListComponent from "./components/exercises/userList.component";
//import EffectExampleComponent from "./components/useeffect.Examples/effect.example";
// import MovieListComponent from "./components/exercises/movie.list.component";
// import ProfileCardComponent from "./components/exercises/profile.card.component";
// import ToogleLightDarkComponent from "./components/exercises/tooglelightdark.component";
// import CounterExcercise3Component from "./components/exercises/counter.exercise3.component";
// import InputMirrorComponent from "./components/exercises/input.mirror.component";
// import GreetingMessageComponent from "./components/exercises/greeting.message.component";
// import ShowAdminMessageComponent from "./components/exercises/show.admin.message.component";
//import ListComponent from "./components/useState.Examples/list.component";
//import ContactFormComponent from "./components/useState.Examples/contact.form.component";
//import AgeCounterComponent from "./components/useState.Examples/age.counter.component";
//import Counter from "./components/useState.Examples/counter.component";
//import MyInput from "./components/useState.Examples/input.component";
//import LikeButtonComponent from "./components/useState.Examples/like.button.component";
function App() {
  return (
    <div className="">
      <h1>State in react</h1>
      {/* <hr /> */}
      {/* <Counter /> */}
      {/* <hr /> */}
      {/* <MyInput /> */}
      {/* <hr /> */}
      {/* <LikeButtonComponent /> */}
      {/* <hr /> */}
      {/* <AgeCounterComponent /> */}
      {/* <hr /> */}
      {/* <ContactFormComponent /> */}
      {/* <hr /> */}
      {/* <ListComponent /> */}
      {/* <hr /> */}
      {/* <GreetingMessageComponent /> */}
      {/* <hr /> */}
      {/* <InputMirrorComponent /> */}
      {/* <hr /> */}
      {/* <CounterExcercise3Component /> */}
      {/* <hr /> */}
      {/* <ToogleLightDarkComponent /> */}
      {/* <hr /> */}
      {/* <ProfileCardComponent /> */}
      {/* <hr /> */}
      {/* <MovieListComponent /> */}
      {/* <hr /> */}
      {/* <EffectExampleComponent /> */}
      {/* <hr /> */}
      {/* <UserListComponent /> */}
      {/* <hr /> */}
      {/* <InputFocus /> */}
      {/* <hr /> */}
      {/* <RenderCount /> */}
      {/* <hr /> */}
      {/* <PreviousValue /> */}
      {/* <hr /> */}
      {/* <FocusInputComponent /> */}
      {/* <hr /> */}
      {/* <PracticePersonalGreetingCard /> */}
      {/* <hr /> */}
      {/* <UseCard /> */}
      {/* <hr /> */}
      {/* <LoggedInGreetingComponent /> */}
      {/* <hr /> */}
      {/* <StatusLightComponent /> */}
      {/* <hr /> */}
      {/* <ShowAdminMessageComponent username="Alice" isAdmin={false} /> */}
      <hr />
      <CustomButton
        label="Click Me"
        onClick={() => alert("Custom Button Clicked!")}
      />
      <hr />
      <TogglingUI />
      <hr />
      <InteractiveList />
    </div>
  );
}

export default App;
