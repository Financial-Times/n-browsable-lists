import React from 'react';
import PropTypes from 'prop-types';
import { conceptListMap } from './concept-list-map';

BrowsableLists.propTypes = {
  concepts: PropTypes.array.isRequired
};

export function BrowsableLists ({ concepts }) {
	const matchedList = conceptListMap.find(pair => pair.conceptId === concepts[0]);

	if (!matchedList) {
		return <div/>
	}

	const listData = {
		uuid: matchedList.listId,
		name: 'Climate Change Reading List',
		items: [{
			uuid: "e4de7a58-1128-42c3-9989-d302d913f2c8",
			title: "New York climate week: Carney concedes banks shrinking from green guidelines",
		},
		{
			uuid: "25a0f06a-b939-4a39-badb-103bf9a38361",
			title: "Why Al Gore is feeling upbeat as COP27 approaches"
		},
		{
			uuid: "31061741-16a1-49fe-a495-6d7dbd3c886a",
			title: "Flood-hit Pakistan should suspend debt repayments, says UN policy paper"
		}]
	}

	return (
		<div className='browsable-lists'>
			<h2 className='browsable-lists-heading'>Curated list by a university professor</h2>
			<div className='browsable-lists-title'>
				<a href={`https://www.ft.com/myft/list/${listData.uuid}`}><h3 className='browsable-lists-title-heading'>{listData.name}</h3></a>
				<p className='browsable-lists-title-text'>{listData.items.length} Saved articles</p>
			</div>
			<ul className='browsable-lists-list'>
				{listData.items.map((item, id) => (
					<li key={id} className='browsable-lists-list-item'><a href={`https://www.ft.com/content/${item.uuid}`}>{item.title}</a></li>
				))}
			</ul>
		</div>
	)
}
