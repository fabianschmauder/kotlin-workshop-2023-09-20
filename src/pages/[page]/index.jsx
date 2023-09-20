import dynamic from "next/dynamic";
import React from "react";
import { useNavigation } from "../../hooks/navigation";
import lau from "../../templates/slides/laudatio"
import basic from "../../templates/slides/kotlin-basic"
import spring from "../../templates/slides/kotlin-spring-start"
import optimizations from "../../templates/slides/kotlin-optimization"

const Agenda = dynamic(() => import("../../templates/slides/agenda"));
const NeueFische = dynamic(() => import("../../templates/slides/neue-fische"));
const Welcome = dynamic(() => import("../../templates/slides/welcome"));

/**
 * Slides in order
 * @type {(React.ComponentClass<{}>|React.FunctionComponent<{}>|(function()))[]}
 */
const slides = [
	Welcome,
	NeueFische,
	Agenda,
	...lau,
	...basic,
	...spring,
	...optimizations
];

const Page = () => {
	const page = useNavigation(slides.length);
	const Slide = slides[page - 1];

	return <Slide />;
};

export default Page;

export const getServerSideProps = async () => {
	return { props: {} };
};
