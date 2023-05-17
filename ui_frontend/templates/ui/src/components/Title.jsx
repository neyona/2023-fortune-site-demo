import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

// I think 10 keywords only?
const Title = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	);
};

Title.defaultProps = {
	title: "Fortunate Cuttlefish Site",
	description: "This is a demo site made by M. Myers about a Fortune Telling Cuttlefish",
	keywords: "fortune cuttlefish, fortune teller, fortunate cuttlefish, little cthulhu, Django, React, Python, Django Rest Framework, SASS, React-Router-Dom"
};

export default Title;
