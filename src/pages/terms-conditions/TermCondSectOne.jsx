import React from "react";
import styles from "../../styles/tailwind";

const TermCondSectOne = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div>
        <div className="sm:container mx-auto sm:px-4">
          <h1 className="text-3xl font-bold mb-4 text-center xs:text-left">
            Terms and Conditions
          </h1>
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
            <p className="mb-4">
              This page outlines the terms and conditions that govern the
              Licensee's occupancy at ProVision Support Services. By agreeing to
              these terms, you acknowledge and agree to adhere to the following
              provisions:
            </p>
            {/* Add all the sections from your terms and conditions here */}
            {/* For example: */}
            <h2 className="text-xl font-semibold mb-2">1. Charges</h2>
            <p className="mb-4">
              The Licensee agrees to pay the license charge weekly and in
              advance.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              2. Use of the Accommodation
            </h2>
            <p className="mb-4">
              The accommodation shall be used solely for residential purposes
              and not for any illegal activities.
            </p>

            <h2 className="text-xl font-semibold mb-2">3. Support</h2>
            <div className="mb-4">
              <p>
                The Licensee acknowledges ProVision Support Service's commitment
                to providing Supported Housing.
              </p>
              <p>
                The Licensee agrees to cooperate with ProVision Support Service
                and its agents by accepting offered support and complying with
                reasonable requirements.
              </p>
              <p>
                In cases where ProVision Support Service determines that support
                is no longer needed, the Licensee agrees to actively seek
                alternative accommodation.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-2">4. Change of Rooms</h2>
            <p className="mb-4">
              The Licensee shall use the room nominated by ProVision Support
              Service and be prepared to change rooms when required.
            </p>

            <h2 className="text-xl font-semibold mb-2">5. Nuisance</h2>
            <p className="mb-4">
              The Licensee shall not cause or allow visitors to cause a nuisance
              or annoyance to other residents, staff, contractors, or neighbors.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              6. Racial and Other Harassment
            </h2>
            <p className="mb-4">
              The Licensee shall not commit or allow visitors to commit
              harassment on the grounds of race, color, religion, sex, sexual
              orientation, age, or disability that may interfere with the peace
              and comfort of others.
            </p>

            <h2 className="text-xl font-semibold mb-2">7. Disruption</h2>
            <p className="mb-4">
              The Licensee shall not engage in acts that disrupt other
              residents' peaceful occupancy or cause harm to individuals.
            </p>

            <h2 className="text-xl font-semibold mb-2">8. Illegal Drugs</h2>
            <p className="mb-4">
              The Licensee shall not possess, use, supply, or allow others to
              possess, use, or supply illegal drugs on the premises.
            </p>

            <h2 className="text-xl font-semibold mb-2">9. Noise</h2>
            <p className="mb-4">
              The Licensee shall not create excessive noise that causes a
              nuisance or annoyance to others.
            </p>

            <h2 className="text-xl font-semibold mb-2">10. Health Safety</h2>
            <p className="mb-4">
              The Licensee shall comply with health, safety, and fire
              instructions provided by ProVision Support Service.
            </p>

            <h2 className="text-xl font-semibold mb-2">11. Security</h2>
            <p className="mb-4">
              The Licensee is responsible for ensuring the security of the
              property, including locking doors and windows when both in and out
              of the building.
            </p>

            <h2 className="text-xl font-semibold mb-2">12. Pets</h2>
            <p className="mb-4">
              The Licensee shall not keep any animals, birds, fish, or reptiles
              on the premises.
            </p>

            <h2 className="text-xl font-semibold mb-2">13. Pets</h2>
            <div className="mb-4">
              <p>
                The Licensee shall maintain the accommodation in a clean and
                tidy state.
              </p>
              <p>
                The Licensee is liable to pay for any damage caused to the
                building, fixtures, fittings, furnishings, or common areas by
                themselves or their visitors, except for fair wear and tear.
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-2">14. Rubbish</h2>
            <p className="mb-4">
              The Licensee shall dispose of rubbish daily in the provided bins.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              15. Alteration and Decoration
            </h2>
            <p className="mb-4">
              The Licensee shall not make alterations to the building, fixtures,
              fittings, or furniture provided by ProVision Support Service.
              Personal furniture is not allowed, and small items require written
              consent.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              16. Reportting Disrepair
            </h2>
            <p className="mb-4">
              The Licensee shall report any disrepair or defect for which
              ProVision Support Service is responsible.
            </p>

            <h2 className="text-xl font-semibold mb-2">17. Car Parking</h2>
            <p className="mb-4">
              The Licensee shall not park any vehicle without a valid tax disc,
              MOT certificate, and at least 3rd party insurance. Parking on
              ProVision Support Service's adjacent land is prohibited.
            </p>

            <h2 className="text-xl font-semibold mb-2">18. Access</h2>
            <p className="mb-4">
              ProVision Support Service retains spare keys and may access the
              room for inspections, repairs, or maintenance with reasonable
              notice.
            </p>

            <h2 className="text-xl font-semibold mb-2">19. Lodgers</h2>
            <p className="mb-4">
              The Licensee shall not take in lodgers or allow anyone else to
              live in the accommodation without ProVision Support Service's
              permission.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              20. Absence from Premises
            </h2>
            <p className="mb-4">
              The Licensee shall inform ProVision Support Service if absent for
              seven days or more.
            </p>

            <h2 className="text-xl font-semibold mb-2">21. House Rules</h2>
            <p className="mb-4">
              The Licensee shall comply with the attached house rules.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              22. Ending your license
            </h2>
            <p className="mb-4">
              The Licensee shall give ProVision Support Service at least four
              weeks' notice in writing to end the license.
            </p>

            <h2 className="text-xl font-semibold mb-2">23. Moving Out</h2>
            <p className="mb-4">
              The Licensee shall remove personal possessions and leave the
              accommodation and fixtures in good condition. The Licensee shall
              return the keys to the accommodation to the ProVision Support
              Service office by 12 noon on the day the license expires.
              ProVision Support Service is not responsible for items left
              behind, and charges may apply for disposal.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              24. Termination by ProVision Support Service
            </h2>
            <p className="mb-4">
              ProVision Support Service may terminate the license immediately in
              certain circumstances and recover possession without a court
              order. Valid notices to the Licensee are considered delivered when
              left at the room.
            </p>

            {/* Repeat this structure for each section of your terms and conditions */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermCondSectOne;
