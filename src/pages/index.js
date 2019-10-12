import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

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
/*
import { TopBackgroundArt, BottomBackgroundArt } from '../components/modernism/background';
import HeaderInfo from '../components/modernism/headerInfo';
*/

const Container = styled.div`
	width: 100%;
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

const IndexPage = () => {
	return (
		<Container>
			<TopPageAnimated />
			<BottomBackgroundArtAnimated />
			<Welcome></Welcome>

			<FAQ></FAQ>

			<Schedule></Schedule>

			<SponsorBox></SponsorBox>
		</Container>
	);
};

export default IndexPage;

/*
const IndexPage = () => (
	<div>
		<a
			id="mlh-trust-badge"
			href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020_seaons&utm_content=blue"
			target="_blank"
			rel="noopener noreferrer"
			style={{
				display: 'block',
				maxWidth: '100px',
				minWidth: '60px',
				position: 'fixed',
				right: '50px',
				top: '0px',
				width: '10%',
				zIndex: '10000',
			}}
		>
			<img
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
				alt="Major League Hacking 2020 Hackathon Season"
				style={{ width: '100%' }}
			/>
		</a>

		<SEO title="" />
		{
			// insert VH logo
		}

		<TopBackgroundArt />
		<BottomBackgroundArt />

		<HeaderInfo />

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</div>
);

export default IndexPage;*/
