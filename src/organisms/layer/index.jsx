import Box from "@mui/material/Box";
import React from "react";

const Layer = ({ children, backgroundColor }) => (
	<Box
		sx={{
			backgroundColor,
			position: "absolute",
			inset: 0,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			px: "1rem",
			py: "1rem",
		}}
	>
		{children}
	</Box>
);

export default Layer;
