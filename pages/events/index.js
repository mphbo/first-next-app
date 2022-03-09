import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { objectToArray } from "../../helpers";

function EventsPage({ events }) {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;

export const getStaticProps = async () => {
  const events = getAllEvents();

  return {
    props: { events },
    revalidate: 60,
  };
};
