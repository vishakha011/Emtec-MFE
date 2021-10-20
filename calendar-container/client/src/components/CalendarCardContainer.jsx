import React from "react";

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
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <main>
      <h1>This is the calendar-container app</h1>
      <p>{!data ? "Loading..." : data}</p>
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
