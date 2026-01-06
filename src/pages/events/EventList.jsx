import React from "react";
import { recentEvents } from "../../data/content";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";

const EventList = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}} bg-grey-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {recentEvents.map((event) => (
          <Link
            to={`/events/${event.slug}`}
            key={event.id}
            className="group bg-secondaryBackground rounded-lg shadow-md px-2 md:px-4 py-4"
          >
            <h2 className="group-hover:underline font-bold mb-2">
              {event.title}
            </h2>
            <p className="text-base mb-2">{event.excerpt}</p>
            <p className="text-sm text-primary">
              {new Date(event.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventList;
