import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import { BrowsableLists } from '../../';

const concepts = [
	'24ad2c58-14fb-4217-b6f7-7ef88ac51375'
]

export default function MainTemplate() {
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
		</Shell>
	)
}
