import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Welcome = () => {
	return (
		<div id="welcome-position">
			<div id="welcome">
				<h2 className="header-text" id="welcome-header">
					Welcome!
				</h2>
				<div>
					<StaticQuery
						query={graphql`
							query WelcomeQuery(filter: { name: { eq: "main" }, sourceInstanceName: { eq: "content" } }) {
								edges {
									node {
										childContentJson {
											description
										}
									}
								}
							}
						`}
						render={data => <>{data.allContentJson.edges.node.description}</>}
					/>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
