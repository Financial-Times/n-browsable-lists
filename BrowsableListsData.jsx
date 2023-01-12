import React from 'react';
import PropTypes from 'prop-types';
import { DataEmbed } from '@financial-times/dotcom-ui-data-embed/dist/node';
// eslint-disable-next-line no-unused-vars
import { h } from '@financial-times/x-engine';

const DATA_EMBED_ID = 'browsable-lists-data'

BrowsableListsData.propTypes = {
	concepts: PropTypes.array.isRequired,
	variant: PropTypes.string.isRequired
};

export function BrowsableListsData({ concepts, variant}) {
	if (concepts && variant) {
		return (
			<DataEmbed id={DATA_EMBED_ID} data={{ concepts, variant }} />
		)
	}

	return <div />
}
