import Head from "next/head";
import Image from "next/image";
import { getAllEvents, getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";
import EventList from "../components/events/EventList";
import { objectToArray } from "../helpers";

export default function HomePage({ events }) {
  if (!events) {
    return <p>Loading!!!</p>;
  }
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 1800,
  };
};
