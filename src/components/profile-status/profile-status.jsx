import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileInfo } from "../../store/profile/profile-selector.js";

const ProfileStatus = () => {
  const dispatch = useDispatch();
  const { status = '' } = useSelector(selectProfileInfo);
  const [statusValue, setStatusValue] = useState(status);
  const [activeEditMode, setActiveEditMode] = useState(false);

  const handleToggleEditStatus = () => {
    setActiveEditMode(!activeEditMode);
    
  };

  const handleInputStatus = (e) => {
    const value = e.target.value;
    setStatusValue(value);
  };


  useEffect(() => {
    setStatusValue(status)
  }, [status])

  return (
    <div>
      {activeEditMode ? (
        <input
          autoFocus={true}
          value={statusValue}
          type="text"
          placeholder="status?"
          onChange={handleInputStatus}
          onBlur={handleToggleEditStatus}
        />
      ) : (
        <span onDoubleClick={handleToggleEditStatus}>{statusValue}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
