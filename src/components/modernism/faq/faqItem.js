import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../images/FAQArrow.svg';

class FAQItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			question: this.props.question,
			answer: this.props.answer,
		};
	}

	onArrowClick() {
		this.setState({ open: !this.state.open });
	}

	render() {
		const arrow_class = this.state.open ? 'arrow-up' : 'arrow-down';

		return (
			<div>
				<div className="faq-item noselect" />
				<div className="question">
					<div className={`arrow-wrapper ${arrow_class}`} onClick={() => this.onArrowClick()}>
						<img src={Arrow} alt="" />
					</div>
					<h4 className="title">{this.state.question}</h4>
				</div>
				{this.state.open && <div className="answer">{this.state.answer}</div>}
			</div>
		);
	}
}

FAQItem.propTypes = {
	open: PropTypes.number,
	question: PropTypes.string,
	answer: PropTypes.string,
	changeOpenArray: PropTypes.func,
};

export default FAQItem;
