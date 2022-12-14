import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import PropTypes from 'prop-types';
import { BrowsableLists } from '../../';

const DEFAULT_CONCEPT = '48256173-6393-4d0e-9364-19a52aef5df1'

MainTemplate.propTypes = {
	conceptId: PropTypes.string,
};

export default function MainTemplate({ conceptId = DEFAULT_CONCEPT }) {
	const concepts = [
		conceptId
	]

	return (
		<Shell siteTitle={`Browsable lists demo`}>
			<link rel="stylesheet" href="./public/styles.css"/>
			<main>
				<div className='content'>
					<h1 className="demo-header">Browsable lists component</h1>
				</div>
				<aside className='rhr'>
					<BrowsableLists concepts={concepts} />
				</aside>
			</main>
			<script src="./public/bundle.js"></script>
		</Shell>
	)
}
