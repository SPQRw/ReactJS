const initialState = {
  computers: [
    {
      id: 1,
      name: 'Computer 1',
      ip: '192.168.1.1',
      status: 'on',
    },
    {
      id: 2,
      name: 'Computer 2',
      ip: '192.168.1.2',
      status: 'off',
    },
  ],
};

const computerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        computers: state.computers.map((computer) =>
          computer.id === action.payload.computerId
            ? { ...computer, name: action.payload.newName }
            : computer
        ),
      };
    case 'CHANGE_IP':
      return {
        ...state,
        computers: state.computers.map((computer) =>
          computer.id === action.payload.computerId
            ? { ...computer, ip: action.payload.newIP }
            : computer
        ),
      };
    case 'TOGGLE_STATUS':
      return {
        ...state,
        computers: state.computers.map((computer) =>
          computer.id === action.payload.computerId
            ? {
              ...computer,
              status: computer.status === 'on' ? 'off' : 'on',
            }
            : computer
        ),
      };
    default:
      return state;
  }
};

export default computerReducer;
