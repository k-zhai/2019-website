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

import {
	TopBackgroundArtAnimated,
	BottomBackgroundArtAnimated,
} from '../components/modernism/background';
import HeaderInfo from '../components/modernism/headerInfo';

const IndexPage = () => (
	<div>
		<TopBackgroundArtAnimated />
		<BottomBackgroundArtAnimated />
		<HeaderInfo />

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</div>
);

export default IndexPage;
