import "./App.css";
import { Form } from "./Form";

function App() {
  const getData = (data) => {
    console.log(" Coming From App.js", data);
  };

  return (
    <div>
      <Form onSubmit={getData} />
    </div>
  );
}

export default App;
