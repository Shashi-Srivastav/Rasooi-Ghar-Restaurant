import { createContext } from "react";

const UserContext = createContext({
	user: { name: "Shashi", email: "shashisrivastav95@gmail.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
