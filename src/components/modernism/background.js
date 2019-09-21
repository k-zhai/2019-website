import React from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';
//import MtSvgLines from 'react-mt-svg-lines';
import '../../../node_modules/animate.css/animate.min.css';

import HeaderShape from '../../images/HeaderShape.svg';
import TextHeaderShapes from '../../images/TextHeaderShapes.svg';

const Container = styled.div`
	width: 100%;
	margin-top: 15em;
	margin-bottom: 0em;
`;

const TopArtStyle = styled.div`
	position: absolute;
	width: 100vw;
	top: 0vw;
	z-index: -1;
`;

const BottomArtStyle = styled.div`
	position: absolute;
	width: 100vw;
	top: 100vw;
	z-index: -1;
`;

const TopArtMod = () => (
	<TopArtStyle>
		<HeaderShape />
	</TopArtStyle>
);

const BottomArtMod = () => (
	<BottomArtStyle>
		<TextHeaderShapes />
	</BottomArtStyle>
);

//export { TopArtMod, BottomArtMod };

/*const TopBackgroundArt = () => {
	return <img id="top-background-art" src={HeaderShape} alt="" />;
};

const BottomBackgroundArt = () => {
	return <img id="bottom-background-art" src={TextHeaderShapes} alt="" />;
};*/

const TopBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInLeft">
		<TopArtMod />
	</InViewMonitor>
);

const BottomBackgroundArtAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInRight">
		<BottomArtMod />
	</InViewMonitor>
);

export { TopBackgroundArtAnimated, BottomBackgroundArtAnimated };
