import Link from "next/link";
import React from "react";
import s from "./event-item.module.css";
import AddressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
import DateIcon from "./icons/date-icon";
import Button from "./ui/Button";

function EventItem(props) {
  const { id, title, image, location, date } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const detailsLink = `/events/${id}`;
  const address = location.replace(", ", "\n");

  return (
    <li className={s["item"]}>
      <img src={`/${image}`} alt={title} />
      <div className={s["content"]}>
        <div className={s["summary"]}>
          <h2>{title}</h2>
          <div className={s["date"]}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={s["address"]}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={s["actions"]}>
          <Button link={detailsLink}>
            <span>Explore Event</span>
            <span className={s["icon"]}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
