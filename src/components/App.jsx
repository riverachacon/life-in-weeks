import { useState, useEffect } from "react";
import "./App.css";
import SelectDate from "./SelectDate";
import LifeInWeeks from "./LifeInWeeks";
import Footer from "./Footer";

function App() {
  const [date, setDate] = useState(""); // date is the same users birthday
  const [weeksLived, setWeeksLived] = useState("");
  const weeksLeft = 4732 - weeksLived; // 4732 weeks are 91 years

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
      <div className="main-container">
        <h1>How many weeks to live life?</h1>
        <SelectDate
          onDateSelected={handleDate}
          onWeeksLived={handleWeeksLived}
        />
        <LifeInWeeks
          onBirthday={date}
          onWeeksLived={weeksLived}
          onWeeksLeft={weeksLeft}
        />
        <Footer />
      </div>
    </>
  );
}
export default App;
