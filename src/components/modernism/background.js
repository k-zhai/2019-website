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

const TopBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInLeft">
		<HeaderShape />
	</InViewMonitor>
);

const BottomBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInRight">
		<TextHeaderShapes />
	</InViewMonitor>
);

export { TopBackgroundArtAnimated, BottomBackgroundArtAnimated };
