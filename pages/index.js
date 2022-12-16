import Head from "next/head";
import React from "react";
import EventList from "../components/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../DUMMY-DATA";

function index() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Events Kenya | Featured Events</title>
        <meta name="description" content="Featured events in Event Kenya" />
      </Head>
      <h2
        className="center"
        style={{ marginTop: "40px", marginBottom: "-20px" }}
      >
        Featured Events
      </h2>
      <EventList items={featuredEvents} />
      <NewsletterRegistration />
    </div>
  );
}

export default index;
