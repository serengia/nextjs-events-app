import React from "react";
import EventList from "../components/event-list";
import { getFeaturedEvents } from "../DUMMY-DATA";

function index() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default index;
