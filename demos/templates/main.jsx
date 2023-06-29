import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import PropTypes from 'prop-types';
import { BrowsableLists } from '../../';

const DEFAULT_CONCEPT = 'a072c32f-42de-4cc6-8e77-c468d681e5db'
const DEFAULT_VARIANT = 'editor'

MainTemplate.propTypes = {
	conceptId: PropTypes.string,
	variant: PropTypes.string,
	amplitudeExperiment: PropTypes.bool,
};

export default function MainTemplate({ conceptId = DEFAULT_CONCEPT, variant = DEFAULT_VARIANT, amplitudeExperiment }) {
	const concepts = [
		conceptId
	]

	return (
		<Shell siteTitle={`Browsable lists demo`}>
			<link rel="stylesheet" href="../public/styles.css"/>
			<main>
				<div className='content'>
					<h1 className="demo-header">Browsable lists component</h1>
				</div>
				<aside className='rhr'>
					<BrowsableLists concepts={concepts} variant={variant} />
				</aside>
			</main>
			<script type='application/json' id='demo-vars' dangerouslySetInnerHTML={{ __html: JSON.stringify({ amplitudeExperiment }) }} />
			<script src="../public/bundle.js"></script>
		</Shell>
	)
}
