import React, { useEffect, useState } from "react";

import styles from "./Modal.module.scss";

import ReactDOM from "react-dom";

const Modal = ({ onClose, showCusModal, activeShipment }) => {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };
  return !showCusModal
    ? null
    : ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              {activeShipment.addresses.map((address) => (
                <div className={styles.shipment}>
                  <div className={styles.row}>
                    <div className={styles.name}>Oreder: {address.order}</div>
                  </div>
                  <div className={styles.row}>
                    <div>Location</div>
                    <div>{address.name}</div>
                  </div>
                  <div className={styles.row}>
                    <div>Latitude</div>
                    <div>{address.latitude}</div>
                  </div>
                  <div className={styles.row}>
                    <div>Longitude</div>
                    <div>{address.longitude}</div>
                  </div>
                </div>
              ))}

              <button className={styles.close} onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  fill="white"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
          </div>
        </>,
        document.getElementById("root")
      );
};

export default Modal;
