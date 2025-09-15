// src/App.jsx
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// אם הקובץ נמצא ליד App.jsx בתוך src/
import toursData from "../public/tours-he.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // סימולציה של "טעינה" מקומית
    setTours(toursData);
    setLoading(false);
  }, []);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>לא נשארו טיולים</h2>
          <button className="btn" onClick={() => setTours(toursData)}>
            רענון
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
