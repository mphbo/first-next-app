import EventItem from "./EventItem";
import classes from "./eventList.module.css";

function EventList({ events }) {
  const eventItems = events.map((event) => (
    <EventItem
      key={event.id}
      id={event.id}
      title={event.title}
      location={event.location}
      date={event.date}
      image={event.image}
    />
  ));
  return <ul className={classes.list}>{eventItems}</ul>;
}

export default EventList;
