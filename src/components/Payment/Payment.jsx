import React, { useState } from "react";
import "./Payment.scss";
import Modal from "react-modal";
import Button from "../../components/Button/Button";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

Modal.setAppElement("#root");

function Payment() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function modalHandler() {
    setIsOpen(!modalIsOpen);
  }

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const [cardNumValue, setCardNumValue] = useState("");

  const handleCardNumChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    setCardNumValue(value);
  };

  const [expriyValue, setExpriyValue] = useState("");

  const handleExpriyChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpriyValue(value);
  };

  const dropdownItems = ["To Go", "Dine In", "Delivery"];

  return (
    <div>
      <button onClick={modalHandler}>Open Modal</button>
      <Modal
        className="payment-modal"
        overlayClassName="payment-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={modalHandler}
        contentLabel="Payment Modal"
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
                value={cardNumValue}
                onChange={handleCardNumChange}
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
                  maxLength="7"
                  placeholder="MM/YYYY"
                  value={expriyValue}
                  onChange={handleExpriyChange}
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
            onClick={modalHandler}
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
