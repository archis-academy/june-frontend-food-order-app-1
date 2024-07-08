import React, { useState } from "react";
import "./Payment.scss";
import Modal from "react-modal";
import Button from "../../components/Button/Button";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

// const customStyles = {
//   overlay: { backgroundColor: "#000000B2" },
//   content: {
//     position: "fixed",
//     top: "0",
//     left: "73%",
//     right: "0",
//     bottom: "0",
//     backgroundColor: "#1F1D2B",
//     border: "1px solid #1F1D2B",
//     // marginRight: "0",
//     // transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

function Payment() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const dropdownItems = ["To Go", "Dine In", "Delivery"];

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        className="payment-modal"
        overlayClassName="payment-modal-overlay"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="header">
          <h1 className="header-title">Payment</h1>
          <p className="header-text">3 payment method available</p>
        </div>

        <div className="line-box">
          <img className="line-svg" src="./public/line.svg" alt="" />
        </div>

        <div className="payment-methods-container">
          <h2 className="methods-title">Payment Method</h2>
          <div className="methods-card-box">
            <div
              onClick={() => handleButtonClick("button1")}
              className={`methods-card ${
                selectedButton === "button1" ? "active" : ""
              }`}
            >
              <img src="./public/credit-card.svg" alt="" />
              <img
                className={`btn-check-icon ${
                  selectedButton === "button1" ? "active" : ""
                }`}
                src="./public/check-icon.svg"
                alt=""
              />
              <p className="methods-card-text">Credit Card</p>
            </div>
            <div className="methods-card">
              <img src="./public/paypal.svg" alt="" />
              <p className="methods-card-text">Paypal</p>
            </div>
            <div
              onClick={() => handleButtonClick("button3")}
              className={`methods-card ${
                selectedButton === "button3" ? "active" : ""
              }`}
            >
              <img src="./public/wallet.svg" alt="" />
              <img
                className={`btn-check-icon ${
                  selectedButton === "button3" ? "active" : ""
                }`}
                src="./public/check-icon.svg"
                alt=""
              />
              <p className="methods-card-text">Cash</p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <form className="payment-information">
            <label id="name" className="informations">
              Cardholder Name
              <input type="text" className="information-inputs" required />
            </label>
            <label id="card-number" className="informations">
              Card Number
              <input
                type="tel"
                className="information-inputs"
                pattern="\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}"
                maxLength="19"
                required
              />
            </label>
            <div className="date-and-cvv-box">
              <label id="expriy-date" className="informations">
                Expiration Date
                <input
                  type="text"
                  id="input-date"
                  className="information-inputs"
                  maxLength="5"
                  placeholder="MM/YYYY"
                  required
                />
              </label>
              <label id="cvv" className="informations">
                CVV
                <input
                  type="password"
                  id="input-cvv"
                  className="information-inputs"
                  maxLength="3"
                  required
                />
              </label>
            </div>
          </form>
        </div>

        <div className="line-box">
          <img className="line-svg" src="./public/line.svg" alt="" />
        </div>

        <div className="order-information">
          <div className="order-type-box">
            <p className="order-type-text">Order Type</p>
            <DropdownMenu items={dropdownItems} />
          </div>
          <div className="table-no-box">
            <p className="table-no-text">Table no.</p>
            <input type="number" className="table-no-input" />
          </div>
        </div>

        <div className="btn-box">
          <Button
            onClick={closeModal}
            width="175px"
            height="50px"
            variant="secondary"
            id="cancel-btn"
          >
            Cancel
          </Button>
          <Button width="175px" height="50px">
            Confirm Payment
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Payment;
