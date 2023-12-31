import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import { timeTable } from "../../ions/data";
import timeImg from "../../ions/images/time.jpg";
import ImageText from "../image-text";

const Slide = () => (
	<ImageText
		image={timeImg}
		body={
			<List>
				{timeTable.map(entry => (
					<ListItem key={entry.time} component="li">
						<NemoText>{entry.time}:</NemoText> {entry.text}
					</ListItem>
				))}
			</List>
		}
		title="Agenda"
		subtitle={``}
	/>
);

export default Slide;
