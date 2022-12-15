import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getFilteredEvents } from "../../DUMMY-DATA";

function ExtendedQueryPage() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const year = +slug[0];
  const month = +slug[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> Invalid filter. Please select valid filter values</p>
        </ErrorAlert>

        <div className="center m-t-m">
          <Button link="/events">Back to all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found.</p>
        </ErrorAlert>

        <div className="center m-t-m">
          <Button link="/events">Back to all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default ExtendedQueryPage;
