import "./ProductManagementEditDish.scss";
import Button from "../Button/Button";

function ProductManagementEditDish({ onButtonClick }) {
  return (
    <div>
      <div className="edit-dish-container">
        <div className="content-container">
          <div className="content-box">
            <label className="informations">
              Dish Image:
              <input type="text" className="information-inputs" required />
            </label>
          </div>
          <div className="content-box">
            <label className="informations">
              Dish Name:
              <input type="text" className="information-inputs" required />
            </label>
          </div>
          <div className="content-box">
            <label className="informations">
              Dish Price:
              <input type="text" className="information-inputs" required />
            </label>
          </div>
        </div>
        <div className="btn-container">
          <Button
            id="cancel-btn"
            width="175px"
            height="50px"
            variant="secondary"
            onclick={onButtonClick}
          >
            Cancel
          </Button>
          <Button width="175px" height="50px">
            Edit Dish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductManagementEditDish;
