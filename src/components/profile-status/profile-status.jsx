import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../store/profile/profile-action.js";

const ProfileStatus = ({status = 'Your status'}) => {
  const dispatch = useDispatch();
  const [statusValue, setStatusValue] = useState(status);
  const [activeEditMode, setActiveEditMode] = useState(false);

  const handleToggleEditStatus = () => {
    setActiveEditMode(!activeEditMode);
  };

  const handleInputStatus = (e) => {
    const value = e.target.value;
    setStatusValue(value)
  };

  const handleUpdateStatus = (e) => {
    const value = e.target.value;
    dispatch(updateStatus(value))
    setActiveEditMode(!activeEditMode);
  }

  return (
    <div>
      {activeEditMode ? (
        <input
          autoFocus={true}
          value={statusValue}
          type="text"
          placeholder="status?"
          onChange={handleInputStatus}
          onBlur={handleUpdateStatus}
        />
      ) : (
        <span onDoubleClick={handleToggleEditStatus}>{status || 'your status'}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
