import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import { BrowsableLists } from '../../';

const concepts = [
	'48256173-6393-4d0e-9364-19a52aef5df1'
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
			<script src="./public/bundle.js"></script>
		</Shell>
	)
}
