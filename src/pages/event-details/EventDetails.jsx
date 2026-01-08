import React from "react";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import styles from "../../styles/tailwind";
import { recentNews } from "../../data/content";

const EventDetailsPage = () => {
  const { slug } = useParams();

  const event = recentNews.find((evt) => evt.slug === slug);
  if (!event) {
    return (
      <>
        <Meta
          title={"Event Not Found | ProVision Support Services CIC"}
          description={
            "The event you are looking for does not exist. Please check back later for upcoming events at ProVision Support Services CIC."
          }
          keywords={
            "event not found, ProVision Support Services CIC, upcoming events"
          }
        />
        <Navbar />
        <Sidebar />
        <section
          className={`${styles.navbarGap} ${styles.paddingTop} ${styles.paddingBottom}`}
        >
          <div className={`${styles.maxWidth} text-center`}>
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="text-lg">
              The event you are looking for does not exist. Please check back
              later for upcoming events.
            </p>
            <Link
              to="/events"
              className="text-primary underline mt-4 inline-block"
            >
              Back to Events
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Meta
        title={`${event.title} | ProVision Support Services CIC`}
        description={event.excerpt}
        keywords={"event, ProVision Support Services CIC, " + event.title}
      />
      <Navbar />
      <Sidebar />
      <section className={`${styles.navbarGap}`}>
        <div className={`${styles.aboutHero}`}>
          <div
            className={`${styles.maxWidth} h-full flex items-center text-white`}
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center w-full">
              <h1 className="text-[2.2rem] md:text-[2.9rem] font-[500]">
                Latest Events
              </h1>
              <div className="flex gap-[0.4rem] items-center text-[0.8rem]">
                <Link to="/events" className="font-bold">
                  Events
                </Link>
                <span className="text-[0.8rem] text-grey-50">
                  <AiOutlineRight />
                </span>
                <span className="text-grey-50">Event Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}} bg-grey-10`}
      >
        <div className="bg-secondaryBackground rounded-lg shadow-md px-4 md:px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <p className="text-base mb-4">{event.excerpt}</p>
          <p className="text-sm text-primary mb-6">
            {new Date(event.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <div className="prose prose-lg max-w-none">
            {event.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Media Note */}
          <div className="mt-6 italic text-sm text-gray-600">
            {event.mediaNote}
          </div>
        </div>

        {/* Other Images Section */}
        {event.otherImages && event.otherImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Event Photos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.otherImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${event.title} - Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
