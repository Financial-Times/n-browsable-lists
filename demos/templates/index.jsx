import React from 'react';
import { Shell } from '@financial-times/dotcom-ui-shell';
import BrowsableLists from '../../';

export default function MainTemplate() {
	return (
		<Shell siteTitle={`Browsable lists demo`}>
			<main>
				<link rel="stylesheet" href="./public/styles.css"/>
				<h1 className="demo-header">Browsable lists component</h1>
				<BrowsableLists />
			</main>
		</Shell>
	)
}
