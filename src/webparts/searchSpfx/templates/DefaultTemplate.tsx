/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:disable:no-unused-variable */
import { css } from 'office-ui-fabric-react';

import styles from '../SearchSpfx.module.scss';
import { ISearchSpfxWebPartProps } from '../ISearchSpfxWebPartProps';

export interface IDefaultTemplate extends ISearchSpfxWebPartProps {
	results: any[];
}

export default class DefaultTemplate extends React.Component<IDefaultTemplate, {}> {
	public render(): JSX.Element {
		return (
			<div className={styles.searchSpfx}>
				<div className={styles.searchSpfx}>
					<h1 className='ms-font-xxl'>Search results for query: {this.props.query}</h1>
					{
						this.props.results.map((result, index) => {
							return (<p key={index}>Result { index + 1 }: <a href={result.Path}>{result.Title}</a></p>);
						})
					}
				</div>
			</div>
		);
	}
}