import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import { BrowsableLists } from '../../';

export default function MainTemplate() {
	return (
		<Shell siteTitle={`Browsable lists demo`}>
			<link rel="stylesheet" href="./public/styles.css"/>
			<main>
				<div className='content'>
					<h1 className="demo-header">Browsable lists component</h1>
				</div>
				<aside className='rhr'>
					<BrowsableLists />
				</aside>
			</main>
		</Shell>
	)
}
