import { createContext, useReducer } from "React";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return { state };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};