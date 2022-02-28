import Head from "next/head";
import Image from "next/image";
import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";
import EventList from "../components/events/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
