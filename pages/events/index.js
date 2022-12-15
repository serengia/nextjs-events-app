import React, { Fragment } from "react";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { getAllEvents } from "../../DUMMY-DATA";

function AllEvents() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;
