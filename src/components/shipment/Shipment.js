import { useEffect, useState } from "react";

import axios from "axios";

import styles from "./Shipment.module.scss";

import Modal from "../modal/Modal";

const Shipment = ({}) => {
  const [shipments, setShipments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [showCusModal, setShowCusModal] = useState(false);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const shipments = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://case-api.trella.app/marketplace",
          {
            headers: {
              Authorization: "ahmed.mostafa6996@gmail.com",
            },
          }
        );
        console.log(shipments, "shipments");
      } catch (e) {}
    };
    fetchShipments();
  }, []);

  const handleOpenModal = () => {
    setShowCusModal(true);
  };
  return (
    <div>
      <div className={styles.shipments}>
        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>

        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>

        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>

        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>
        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>
        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>
        <div className={styles.shipment}>
          <div className={styles.row}>
            <div className={styles.name}>Name</div>
            <button onClick={handleOpenModal} className={styles["order-btn"]}>
              Orders
            </button>
          </div>
          <div className={styles.row}>
            <div>driv</div>
            <div>Libya</div>
          </div>
        </div>

        <Modal
          showCusModal={showCusModal}
          onClose={() => setShowCusModal(false)}
          data="b"
        />
      </div>
    </div>
  );
};
export default Shipment;
