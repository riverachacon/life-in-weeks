// import { useState, useEffect } from "react";
// import "./lifeInWeeks.css";
// function LifeInWeeks(props) {
//   let weeksLived = props.onWeeksLived;
//   let weeksLeft = props.onWeeksLeft;
//   let birthday = props.onBirthday;

//   return (
//     <>
//       <h2>hola</h2>
//       <div className="weeks-container">
//         <div className="weeks-count">
//           {Array.from({ length: weeksLived }).map((i, index) => (
//             <div key={index} className="weeks-lived"></div>
//           ))}
//           {Array.from({ length: weeksLeft }).map((i, index) => (
//             <div key={index} className="weeks-left"></div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
// export default LifeInWeeks;

import { useState, useEffect } from "react";
import "./lifeInWeeks.css";
function LifeInWeeks(props) {
  let weeksLived = props.onWeeksLived;
  let weeksLeft = props.onWeeksLeft;
  let birthday = props.onBirthday;
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (birthday) {
      setShowMessage(false); //when date input hide message
    }
  }, [birthday]);

  return (
    <>
      {showMessage ? ( // if showMessage true, show h2
        <h2>Please enter your birthdate</h2>
      ) : (
        // else show weeks
        <>
          <h2>hola</h2>
          <div className="weeks-container">
            <div className="weeks-count">
              {Array.from({ length: weeksLived }).map((_, index) => (
                <div key={index} className="weeks-lived"></div>
              ))}
              {Array.from({ length: weeksLeft }).map((_, index) => (
                <div key={index} className="weeks-left"></div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default LifeInWeeks;
