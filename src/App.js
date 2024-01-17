import Answer from "./components/Answer";
import MainChat from "./components/MainChat";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const initialRandomNumber = Math.floor(Math.random() * 1000) + 1;
  return (
    <div ClassName="w-screen h-screen p-3 flex flex-col">
      <Answer initialRandomNumber={initialRandomNumber} />
      <MainChat initialRandomNumber={initialRandomNumber} />
    </div>);
}

export default App;
