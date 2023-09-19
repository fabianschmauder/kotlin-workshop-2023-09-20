import React from "react";
import NemoText from "../../atoms/nemo-text";
import Text from "../../atoms/text";
import welcomeImg from "../../ions/images/bootcamp.jpg";
import ImageText from "../image-text";

const Slide = () => (
	<ImageText
		image={welcomeImg}
		body={
			<>
				<Text variant="h6"><NemoText>Willkommen:</NemoText></Text>	
			</>
		}
		title="Workshop"
		subtitle={"Kotlin"}
	/>
);

export default Slide;
