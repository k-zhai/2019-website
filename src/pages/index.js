import React from 'react';
import styled from 'styled-components';

import '../components/layout.css';
import '../../node_modules/animate.css/animate.min.css';
import '../components/modernism/modernism.css';

import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/modernism/faq/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import InViewMonitor from 'react-inview-monitor';

import { TopBackground, BottomBackgroundArtAnimated } from '../components/modernism/background';
import HeaderInfo from '../components/modernism/headerInfo';

const Container = styled.div`
	position: 'relative',
	width: '0vw',
	zIndex: '0',
`;

const TopPage = () => {
	return (
		<Container>
			<TopBackground />
			<HeaderInfo />
		</Container>
	);
};

const TopPageAnimated = () => (
	<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated rollIn">
		<TopPage />
	</InViewMonitor>
);

const IndexPage = () => (
	<div>
		<TopPageAnimated />
		<BottomBackgroundArtAnimated />
		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</div>
);

export default IndexPage;
