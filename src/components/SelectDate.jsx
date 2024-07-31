import { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

function SelectDate(props) {
  const [birthday, setBirthday] = useState("");
  let currentDate = new Date();

  function weeksBetween(d1, d2) {
    // calculating how many weeks the user has lived
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  function onChange(date, dateString) {
    // console.log(dateString);
    setBirthday(dateString);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const birthdayDate = new Date(birthday); // convert 'birthday' to Date object
    const livedWeeks = weeksBetween(birthdayDate, currentDate); // weeksLived
    props.onDateSelected(birthdayDate);
    props.onWeeksLived(livedWeeks); // pass calculated livedWeeks to original weeksLived
  }

  return (
    <>
      <h3 className="enterB">Enter your birthday</h3>
      <div className="selectDateContainer">
        <form onSubmit={handleSubmit}>
          <DatePicker
            onChange={onChange}
            minDate={dayjs("1930-10-01", dateFormat)}
            maxDate={dayjs("2012-12-31", dateFormat)}
          />
          <div className="submitButton">
            <button type="submit">Done</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SelectDate;
