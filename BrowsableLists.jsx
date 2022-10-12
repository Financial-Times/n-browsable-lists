import React from 'react';
import PropTypes from 'prop-types';
import { DataEmbed } from '@financial-times/dotcom-ui-data-embed';
// eslint-disable-next-line no-unused-vars
import { h } from '@financial-times/x-engine';

const DATA_EMBED_ID = 'browsable-lists-data'

BrowsableLists.propTypes = {
	concepts: PropTypes.array.isRequired
};

export function BrowsableLists({ concepts }) {
	if (concepts) {
		return (
			<DataEmbed id={DATA_EMBED_ID} data={{ concepts }} />
		)
	}

	return <div />
}
