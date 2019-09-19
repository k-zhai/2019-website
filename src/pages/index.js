import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

import '../components/layout.css';
import '../components/modernism/modernism.css';

import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import { TopBackgroundArt, BottomBackgroundArt } from '../components/modernism/background';
import HeaderInfo from '../components/modernism/headerInfo';

const Container = styled.div`
	width: 100%;
	margin: 10em auto;
`;

const IndexPage = () => (
	<Container>
		<TopBackgroundArt />
		<BottomBackgroundArt />

		<HeaderInfo />

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</Container>
);

export default IndexPage;
