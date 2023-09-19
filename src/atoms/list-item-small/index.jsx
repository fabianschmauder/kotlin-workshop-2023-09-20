import React from "react";
import Text from "../text";

const ListItemSmall = ({ children }) => (
	<Text
		component="li"
		sx={{ pb: "0.25rem", pr: "0.25rem",  fontSize: "0.75rem",color: "#7589A2" }}
	>
		{children}
	</Text>
);
export default ListItemSmall;
