import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { h } from '@financial-times/x-engine';

BrowsableListsContent.propTypes = {
  heading: PropTypes.string.isRequired,
  listData: PropTypes.object.isRequired
};

export function BrowsableListsContent ({ heading, listData }) {

	if (listData?.articleData?.length > 0) {
		return (
			<div className='browsable-lists'>
				<h2 className='browsable-lists-heading'>{heading}</h2>
				<div className='browsable-lists-title'>
					<a href={`https://www.ft.com/myft/list/${listData.id}`} data-trackable="browsable-list-heading"><h3 className='browsable-lists-title-heading'>{listData.name}</h3></a>
					<p className='browsable-lists-title-text'>{listData.articleData.length} Saved articles</p>
				</div>
				<ul className='browsable-lists-list'>
					{listData.articleData.slice(0,4).map((article, id) => (
						<li key={id} className='browsable-lists-list-item'><a href={`https://www.ft.com/content/${article.id}`} data-trackable="browsable-list-article">{article.title}</a></li>
					))}
				</ul>
			</div>
		)
	}

	return <div />
}
