import React from "react";
import styles from "../../styles/tailwind";
import GetInTouch from "../../components/forms/GetInTouch";

const ContactSectTwo = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <GetInTouch />
    </section>
  );
};

export default ContactSectTwo;
