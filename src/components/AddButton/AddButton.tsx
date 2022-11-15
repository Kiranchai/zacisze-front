import { ImPlus } from "react-icons/im";
import "./AddButton.css";

const AddButton = ({ handleOnClick }: { handleOnClick?: () => void }) => {
  return (
    <button className="add-new-button" onClick={handleOnClick}>
      <ImPlus />
      <span className="add-new-button-span">Dodaj</span>
    </button>
  );
};

export default AddButton;
