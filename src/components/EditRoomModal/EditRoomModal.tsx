import "./EditRoomModal.css";
import { Backdrop } from "@mui/material";
import React from "react";

const EditRoomModal = ({
  shown,
  setShown,
}: {
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleOnCancel = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShown(false);
  };

  return (
    <div className={shown ? "" : "hidden"}>
      <Backdrop sx={{ color: "#fff", zIndex: 1000 }} open>
        <form className="edit-room-modal">
          <div className="edit-room-row">
            <label>Nazwa pokoju:</label>
            <input type="text" className="edit-room-input" />
          </div>

          <div className="edit-room-row">
            <label>Gniazdka:</label>
            <input type="number" min={0} className="edit-room-input details" />
          </div>
          <div className="edit-room-row">
            <label>
              Powierzchnia [m<sup>2</sup>] :
            </label>
            <input type="number" min={0} className="edit-room-input details" />
          </div>

          <div className="edit-room-row">
            <label>Miejsca :</label>
            <input type="number" min={0} className="edit-room-input details" />
          </div>

          <div className="edit-room-row">
            <label>Stoły :</label>
            <input type="number" min={0} className="edit-room-input details" />
          </div>

          <div className="edit-room-row">
            <label>Projektory :</label>
            <input type="number" min={0} className="edit-room-input details" />
          </div>

          <div className="edit-room-row">
            <label>Zdjęcia: </label>
            <input type="file" accept=".png" multiple className="file-input" />
          </div>

          <div className="edit-room-row">
            <button
              type="submit"
              className="submit-btn"
              onClick={handleOnSubmit}
            >
              Utwórz
            </button>
            <button className="submit-btn cancel" onClick={handleOnCancel}>
              Anuluj
            </button>
          </div>
        </form>
      </Backdrop>
    </div>
  );
};

export default EditRoomModal;
