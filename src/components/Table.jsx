import React from "react";
import "./table.css";

const Table = ({ events }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Category 1":
        return "#CD4E0E";
      case "Category 2":
        return "#4B83C5";
      case "Category 3":
        return "#E7B227";
      default:
        return "transparent";
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td
                className="types"
                style={{ backgroundColor: getCategoryColor(event.category) }}
              >
                {event.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
