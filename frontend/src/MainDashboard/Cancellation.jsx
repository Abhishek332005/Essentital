

// // Cancellation.jsx
// import React from "react";
// import "./Cancellation.css";

// function Cancellation() {
//   return (
//     <div className="cancel-cancel-wrap">
//       <div className="cancel-cancel-card">
//         <header className="cancel-cancel-header">
//           <h1 className="cancel-cancel-title">Cancellation Policy</h1>
//         </header>

//         <section className="cancel-cancel-section">
//           <ul className="cancel-cancel-list">
//             <li>Orders can be cancelled within 24 hours if not shipped.</li>
//             <li>Contact support via email or phone for cancellation.</li>
//             <li>Shipped orders cannot be cancelled.</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Cancellation;






// Cancellation.jsx - Internationalized Version
import React from "react";
import { useTranslation } from "react-i18next";
import "./Cancellation.css";

function Cancellation() {
  const { t } = useTranslation();

  return (
    <div className="cancel-cancel-wrap">
      <div className="cancel-cancel-card">
        {/* Header */}
        <header className="cancel-cancel-header">
          <h1 className="cancel-cancel-title">{t('cancellationPolicy')}</h1>
          {/* <p className="cancel-update-date">{t('cancelEffectiveDate', { date: "January 2024" })}</p> */}
        </header>

        {/* Main Policy Section */}
        <section className="cancel-cancel-section">
          <ul className="cancel-cancel-list">
            <li>
              <strong>{t('cancelOrderCancellation')}:</strong> 
              {t('cancelOrderCancellationDesc')}
            </li>
            <li>
              <strong>{t('cancelHowToCancel')}:</strong> 
              {t('cancelHowToCancelDesc')}
            </li>
            <li>
              <strong>{t('cancelShippedOrders')}:</strong> 
              {t('cancelShippedOrdersDesc')}
            </li>
          </ul>

          {/* Contact Information */}
          <div className="cancel-contact-info">
            <p className="cancel-contact-text">
              {t('contactForQueries')}
              <strong className="cancel-email">
                24x7@essentiapaquatech.com
              </strong>
            </p>

            <p className="cancel-copyright">
              {t('cancelCopyright', { year: "2024", company: "Essential Aquatech P.V.T L.T.D" })}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cancellation;