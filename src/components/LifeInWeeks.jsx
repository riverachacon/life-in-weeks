import { useState, useEffect } from "react";
import "./lifeInWeeks.css";
function LifeInWeeks(props) {
  let weeksLived = props.onWeeksLived;
  let weeksLeft = props.onWeeksLeft;
  let totalWeeks = weeksLived + weeksLeft;
  let birthday = props.onBirthday;
  const [showMessage, setShowMessage] = useState(true);
  const [hoverInfo, setHoverInfo] = useState({ row: null, column: null });

  function handleMouseEnter(index) {
    let column = index % 52;
    let row = Math.floor(index / 52);
    setHoverInfo({ row, column });
  }
  function handleMouseLeave() {
    setHoverInfo({ row: null, column: null });
  }

  useEffect(() => {
    if (birthday) {
      setShowMessage(false); //when date input hide message
    }
  }, [birthday]);

  return (
    <>
      {showMessage ? ( // if showMessage true, show h2
        <>
          {" "}
          <h2 className="enterbd">Please enter your birthday</h2>
          <div className="footer-spacer"></div>
        </>
      ) : (
        // else show weeks
        <>
          <div className="instructions">
            {/*add numbers to weeks lived and remaining */}
            <div className="instructions-info">
              <p>
                Each box stands for one week of your life. The chart below has
                52 boxes across for the weeks in a year and 91 boxes down for
                the (hopefully) 91 years of your life.
              </p>
            </div>
            <div className="lived">
              <div className="lived-color"></div> <p>WEEKS LIVED</p>
            </div>
            <div className="left">
              <div className="left-color"></div> <p>WEEKS REMAINING</p>
            </div>
          </div>
          <div className="info">
            <p>Week: {hoverInfo.column}</p>
            <p>Year: {hoverInfo.row}</p>
          </div>

          <div className="weeks-container">
            <div className="weeks-count">
              {Array.from({ length: weeksLived }).map((i, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="weeks-lived"
                ></div>
              ))}
              {Array.from({ length: weeksLeft }).map((i, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="weeks-left"
                ></div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default LifeInWeeks;
