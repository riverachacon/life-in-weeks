import { useState, useEffect } from "react";
import "./App.css";
import SelectDate from "./SelectDate";
function App() {
  const [date, setDate] = useState(""); // date is the same users birthday
  const [weeksLived, setWeeksLived] = useState("");
  const weeksLeft = 4732 - weeksLived;
  useEffect(() => {
    if (date && weeksLived) {
      console.log("user birthday: ", date);
      console.log("Weeks lived: ", weeksLived);
      console.log("weeks left: ", weeksLeft);
    }
  }, [date, weeksLived]);

  function handleDate(birthday) {
    setDate(birthday);
    // console.log(date);
  }
  function handleWeeksLived(weeks) {
    setWeeksLived(weeks);
  }
  return (
    <>
      <h1>How many weeks to live life?</h1>
      <SelectDate onDateSelected={handleDate} onWeeksLived={handleWeeksLived} />
    </>
  );
}
export default App;
