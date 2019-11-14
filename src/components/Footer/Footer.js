import React from 'react';
import './Footer.scss';

import IconFB from '../../icons/IconFB';
import IconLI from '../../icons/IconLI';
import IconTwitter from '../../icons/IconTwitter';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer-links'>
				<a href='/'>
					<p>About</p>
				</a>
				<a href='/'>
					<p>Privacy</p>
				</a>
				<a href='/'>
					<p>Terms</p>
				</a>
			</div>
			<hr className='footer-line' />
			<div className='footer-icons'>
				<a href='/'>
					<IconFB />
				</a>
				<a href='/'>
					<IconLI />
				</a>
				<a href='/'>
					<IconTwitter />
				</a>
			</div>
			<p className='copyright'> &#169; QualityHub 2019</p>
		</div>
	);
}
