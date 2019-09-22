import React from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';
//import MtSvgLines from 'react-mt-svg-lines';
import '../../../node_modules/animate.css/animate.min.css';

import HeaderShape from '../../images/HeaderShape.svg';
import TextHeaderShapes from '../../images/TextHeaderShapes.svg';

//export { TopArtMod, BottomArtMod };

/*const TopBackgroundArt = () => {
	return <img id="top-background-art" src={HeaderShape} alt="" />;
};

const BottomBackgroundArt = () => {
	return <img id="bottom-background-art" src={TextHeaderShapes} alt="" />;
};*/

const ContainerTop = styled.div`
	position: absolute;
	width: 100vw;
	top: 0vw;
	z-index: -1;
`;

const ContainerBottom = styled.div`
	position: absolute;
	width: 100vw;
	top: 58vw;
	z-index: -1;
`;

const TopBackground = () => {
	return (
		<ContainerTop>
			<HeaderShape />
		</ContainerTop>
	);
};

const BottomBackground = () => {
	return (
		<ContainerBottom>
			<TextHeaderShapes />
		</ContainerBottom>
	);
};

const TopBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInLeft">
		<TopBackground />
	</InViewMonitor>
);

const BottomBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInRight">
		<BottomBackground />
	</InViewMonitor>
);

export { TopBackgroundArtAnimated, BottomBackgroundArtAnimated };
