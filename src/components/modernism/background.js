import React from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';
//import MtSvgLines from 'react-mt-svg-lines';
import '../../../node_modules/animate.css/animate.min.css';

import HeaderShape from '../../images/modernism/HeaderShape.svg';
import TextHeaderShapes from '../../images/modernism/TextHeaderShapes.svg';

const Container = styled.div`
	width: 76%;
	margin: 10em auto;
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
	top: 58vw;
	z-index: -1;
`;

const TopArtMod = () => (
	<Container>
		<TopArtStyle>
			<HeaderShape />
		</TopArtStyle>
	</Container>
);

const BottomArtMod = () => (
	<Container>
		<TopArtStyle>
			<TextHeaderShapes />
		</TopArtStyle>
	</Container>
);

const TopBackgroundArt = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInTop">
		<TopArtMod />
	</InViewMonitor>
);

const BottomBackgroundArt = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInTop">
		<BottomArtMod />
	</InViewMonitor>
);

export { TopBackgroundArt, BottomBackgroundArt };
