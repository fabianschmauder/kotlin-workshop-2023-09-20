import Box from "@mui/material/Box";
import React from "react";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const TextLayout = ({ title, subtitle, body, objectPosition, objectFit }) => {
	return (
		<Layout>
			<Layer  >
				<Box sx={{width: '100%',  height: "100%"}}>
					
					<Text variant="h4" sx={{ pb: "1rem" }}>
						{title}
					</Text>
					<Text variant="subtitle2" sx={{ pb: "1rem" }}>
						{subtitle}
					</Text>
					<Text>{body}</Text>
		
				</Box>
			</Layer>
		</Layout>
	);
};
export default TextLayout;
