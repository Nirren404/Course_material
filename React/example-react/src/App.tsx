import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="">
      <h1>Vite + React + Nirari</h1>
      <CardComponent
        title="An Amazing journey"
        description="A description of our journey when we ate chicken buffalo chicken burger it was lovelly joblley "
        imgUrl="https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg"
      />
    </div>
  );
}

export default App;
