import React, { useRef } from "react";
import Button from "./ui/Button";
import s from "./event-search.module.css";

function EventSearch() {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const findEventsHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={s["form"]}>
      <div className={s["controls"]}>
        <div className={s["control"]}>
          <label htmlFor="year"></label>
          <select name="year" id="year" ref={yearInputRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={s["control"]}>
          <label htmlFor="month"></label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button type="submit">Find Events</Button>
    </form>
  );
}

export default EventSearch;
