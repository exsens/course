import { observer } from "mobx-react-lite";
import { useState,useEffect } from "react";
import profile from "../../mobx/profile";

const ProfileStatus = observer(({status = ''}) => {
  const { updateStatus } = profile
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
    updateStatus(value)
    setActiveEditMode(!activeEditMode);
  };

  useEffect(function getStatusValue() {
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
          onBlur={handleUpdateStatus}
        />
      ) : (
        <span onDoubleClick={handleToggleEditStatus}>{status || 'your status'}</span>
      )}
    </div>
  );
});

export default ProfileStatus;
