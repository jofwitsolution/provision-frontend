import React from "react";
import styles from "../../styles/tailwind";
import { recentEvents } from "../../data/content";
import { Link } from "react-router-dom";

const HomeRecentEvent = () => {
  return (
    <section>
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex gap-[1rem] items-center">
          <hr className="inline-block border-2 border-grey-100 w-[6rem]" />
          <h3 className="font-[500]">RECENT EVENTS</h3>
        </div>
        <div>
          <h3 className="font-[700] text-[2rem] leading-[2rem]">
            Stay Updated with Our Latest Events
          </h3>
        </div>
        <div className="lg:w-[60%] my-[1.2rem]">
          <p className="text-grey-100">
            Explore our recent events that highlight our commitment to community
            engagement and support services. From workshops to social
            gatherings, stay informed about how we make a difference together.
          </p>
        </div>

        {/* Event items can be added here in the future */}
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
      </div>
    </section>
  );
};

export default HomeRecentEvent;
