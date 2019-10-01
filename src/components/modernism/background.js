import React from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';
//import MtSvgLines from 'react-mt-svg-lines';
import '../../../node_modules/animate.css/animate.min.css';

import HeaderShape from '../../images/HeaderShape.svg';
import TextHeaderShapes from '../../images/TextHeaderShapes.svg';

import Img from 'react-image';

//export { TopArtMod, BottomArtMod };

/*const TopBackgroundArt = () => {
	return <img id="top-background-art" src={HeaderShape} alt="" />;
};

const BottomBackgroundArt = () => {
	return <img id="bottom-background-art" src={TextHeaderShapes} alt="" />;
};*/

const svgStyle = {
	position: 'relative',
	width: '100vw',
	top: '-10vw',
	zIndex: '0',
};

const svgStyle2 = {
	position: 'relative',
	width: '100vw',
	top: '-40vw',
	zIndex: '0',
};

const TopBackground = () => {
	return <HeaderShape style={svgStyle} />;
};

const BottomBackground = () => {
	return <TextHeaderShapes style={svgStyle2} />;
};

/*const TopBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated rollIn">
		<TopBackground />
	</InViewMonitor>
);*/

const BottomBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated rotateIn">
		<BottomBackground />
	</InViewMonitor>
);

export { TopBackground, BottomBackgroundArtAnimated };
