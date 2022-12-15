import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { getAllEvents } from "../../DUMMY-DATA";

function AllEvents() {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <Fragment>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;
