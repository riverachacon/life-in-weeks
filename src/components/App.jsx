import { useState, useEffect } from "react";
import "./App.css";
import SelectDate from "./SelectDate";
function App() {
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(date);
  }, [date]);

  function handleDate(birthday) {
    setDate(birthday);
    // console.log(date);
  }
  return (
    <>
      <h1>How many weeks to live life?</h1>
      <SelectDate onDateSelected={handleDate} />
    </>
  );
}
export default App;
