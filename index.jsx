import React from 'react';
import PropTypes from 'prop-types';
import { DataEmbed } from '@financial-times/dotcom-ui-data-embed';
// eslint-disable-next-line no-unused-vars
import { h } from '@financial-times/x-engine';

const DATA_EMBED_ID = 'browsable-lists-data'

BrowsableLists.propTypes = {
  listData: PropTypes.object,
	concepts: PropTypes.array.isRequired
};

export function BrowsableLists ({ concepts, listData }) {
	if (listData) {
		return (
			<div className='browsable-lists'>
				<h2 className='browsable-lists-heading'>Curated list by a university professor</h2>
				<div className='browsable-lists-title'>
					<a href={`https://www.ft.com/myft/public-list/${listData.uuid}`}><h3 className='browsable-lists-title-heading'>{listData.name}</h3></a>
					<p className='browsable-lists-title-text'>{listData.items.length} Saved articles</p>
				</div>
				<ul className='browsable-lists-list'>
					{listData.items.slice(0,4).map((item, id) => (
						<li key={id} className='browsable-lists-list-item'><a href={`https://www.ft.com/content/${item.uuid}`}>{item.title}</a></li>
					))}
				</ul>
			</div>
		)
	}

	if (concepts) {
		return (
			<DataEmbed id={DATA_EMBED_ID} data={{ concepts }} />
		)
	}

	return <div />
}
