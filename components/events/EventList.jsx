import EventItem from "./EventItem";
import classes from "./eventList.module.css";

function EventList({ items }) {
  const events = items.map((event) => (
    <EventItem
      key={event.id}
      id={event.id}
      title={event.title}
      location={event.location}
      date={event.date}
      image={event.image}
    />
  ));
  return <ul className={classes.list}>{events}</ul>;
}

export default EventList;
