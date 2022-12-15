import React from "react";
import EventList from "../components/event-list";
import { getFeaturedEvents } from "../DUMMY-DATA";

function index() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h2
        className="center"
        style={{ marginTop: "40px", marginBottom: "-20px" }}
      >
        Featured Events
      </h2>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default index;
