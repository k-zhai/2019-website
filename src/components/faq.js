import React from 'react';

import FAQItem from './faqItem';

// need to import an array of objects with question answer pairs
// also need to figure out how to link within them

import styled from 'styled-components';

const StyledDiv = styled.div`
	border-radius: 50%;
	border: 1px;
	width: 50vw;
	height: 50vw;
	background: transparent;
	margin: 6vw 0 0 0;
	max-width: 50vw;
	max-height: 50vw;
	padding: 1vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow-y: hidden;
`;

const example = [
	{ question: 'What is lorem?', answer: 'Ipsum' },
	{ question: 'What is ipsum?', answer: 'Lorem' },
];
const FAQ = () => {
	return (
		<div id="FAQ-position">
			<h2 className="header-text" id="FAQ">
				FAQ
			</h2>
			<StyledDiv>
				{example.map((el, idx) => (
					<FAQItem key={idx} {...el}></FAQItem>
				))}
			</StyledDiv>
		</div>
	);
};

export default FAQ;
