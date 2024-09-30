import { database } from "../database/db";

interface UserState {
  currentUser: any;
  users: typeof database.users;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: UserState = {
  currentUser: null,
  users: database.users,
};

const userReducer = (state: UserState = initialState, action: Action): UserState => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "BAN_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
