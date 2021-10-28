import React from "react";
import axios from "axios";
// import FetchDataFromServer from "../components/FetchDataFromServer";

const CalendarCard = React.lazy(() => import("calendar_card/CalendarCard"));

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};
const CalendarCardContainer = () => {
  const calendarCards = Array.from(Array(24).keys());
  const [data, setData] = React.useState(null);
 
  React.useEffect(() => {
    axios.get("/api").then((response)=> setDataresponse.data)
  }, []);
  
  return (
    <main>
      <h1>This is the calendar-container app</h1>
      <p>{!data ? "Loading..." : data}</p>
      {/* <FetchDataFromServer/> */}
      <div style={style}>
        {calendarCards.map((day) => (
          <React.Suspense
            fallback={<p>Loading content from app 2...</p>}
            key={day}
          >
            <CalendarCard dayOfDecember={day + 1} />
          </React.Suspense>
        ))}
      </div>
    </main>
  );
};
export default CalendarCardContainer;
