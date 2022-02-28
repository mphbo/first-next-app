import EventItem from "./EventItem";

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
  return <ul>{events}</ul>;
}

export default EventList;
