export const changeName = (computerId, newName) => ({
    type: 'CHANGE_NAME',
    payload: { computerId, newName },
  });
  
  export const changeIP = (computerId, newIP) => ({
    type: 'CHANGE_IP',
    payload: { computerId, newIP },
  });
  
  export const toggleStatus = (computerId) => ({
    type: 'TOGGLE_STATUS',
    payload: { computerId },
  });
  