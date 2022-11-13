import { ImPlus } from "react-icons/im";
import "./AddButton.css";

const AddButton = () => {
  return (
    <button className="add-new-button">
      <ImPlus />
      <span className="add-new-button-span">Dodaj</span>
    </button>
  );
};

export default AddButton;
