import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../store/profile/profile-action";

const ProfileStatus = ({status = '', isSelfUser}) => {
  const dispatch = useDispatch();
  const [statusValue, setStatusValue] = useState('');
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
  };

  useEffect(function getStatusValue() {
    setStatusValue(status)
  }, [status])

  return (
    <div>
      {(activeEditMode && isSelfUser) ? (
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
