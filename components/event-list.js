import React from "react";
import EventItem from "./event-item";
import s from "./event-list.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={s["list"]}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          description={item.description}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
