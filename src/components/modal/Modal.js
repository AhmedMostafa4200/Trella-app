import React, { useEffect, useState } from "react";

import styles from "./Modal.module.scss";
import styless from "../shipment/Shipment.module.scss";

import ReactDOM from "react-dom";

const Modal = (props) => {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  return !props.showCusModal
    ? null
    : ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={props.onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.shipment}>
                <div className={styles.row}>
                  <div className={styles.name}>Oreder:</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
              </div>

              <div className={styles.shipment}>
                <div className={styles.row}>
                  <div className={styles.name}>Oreder:</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
              </div>
              <div className={styles.shipment}>
                <div className={styles.row}>
                  <div className={styles.name}>Oreder:</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
              </div>

              <div className={styles.shipment}>
                <div className={styles.row}>
                  <div className={styles.name}>Oreder:</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
              </div>
              <div className={styles.shipment}>
                <div className={styles.row}>
                  <div className={styles.name}>Oreder:</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
                <div className={styles.row}>
                  <div>driv</div>
                  <div>Libya</div>
                </div>
              </div>

              <button className={styles.close} onClick={props.onClose}>
                X
              </button>
            </div>
          </div>
        </>,
        document.getElementById("root")
      );
};

export default Modal;
