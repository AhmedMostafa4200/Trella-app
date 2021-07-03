import { useEffect, useState } from "react";

import axios from "axios";

import styles from "./Shipment.module.scss";

import Modal from "../modal/Modal";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

const Shipment = ({}) => {
  const [shipments, setShipments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [activeShipment, setActiveShipment] = useState({});
  const [showCusModal, setShowCusModal] = useState(false);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const shipments = await axios.get("http://localhost:3004/shipments", {
          headers: {
            Authorization: "ahmed.mostafa6996@gmail.com",
          },
        });
        setShipments(shipments.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    fetchShipments();
  }, []);

  const handleOpenModal = (shipment) => {
    setActiveShipment(shipment);
    setShowCusModal(true);
  };
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      <div className={styles.shipments}>
        {shipments.map((shipment) => (
          <div className={styles.shipment}>
            <div className={styles.row}>
              <div className={styles.name}>Type: {shipment.commodity}</div>
              <button
                onClick={() => handleOpenModal(shipment)}
                className={styles["order-btn"]}
              >
                Orders
              </button>
            </div>
            <div className={styles.row}>
              <div>Vehicle type:</div>
              <div>{shipment.vehicleType}</div>
            </div>
            <div className={styles.row}>
              <div>Price:</div>
              <div>{shipment.price}</div>
            </div>
            <div className={styles.row}>
              <div>Number Of Bids:</div>
              <div>{shipment.numberOfBids}</div>
            </div>
          </div>
        ))}

        <Modal
          showCusModal={showCusModal}
          onClose={() => setShowCusModal(false)}
          activeShipment={activeShipment}
        />
      </div>
    </>
  );
};
export default Shipment;
