import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.scss';

import Features from './Features';
import Panels from './Panels';

const LandingPage = props => {
	// array with texts to type in typewriter
	let [animatedText, setText] = useState('');
	// let [animationStatus, setStatus] = useState(true);
	let [seconds, setTime] = useState(0);
	let [wordIndex, setWord] = useState(0);
	let dataText = ['Interviews', 'Code', 'Designs', 'Resumes', 'Quailcoin'];
	let key;

	useEffect(() => {
		key = setInterval(() => {
			setTime(seconds => seconds + 1);
		}, 100);
		return () => {
			clearInterval(key);
		};
	}, []);

	useEffect(() => {
		if (wordIndex >= dataText.length) {
			setWord(0);
		} else {
			let letter_index = Math.floor(seconds / 1);
			setText(dataText[wordIndex].substring(0, letter_index + 1));
			// Add delay when word is completed
			if (letter_index == dataText[wordIndex].length - 1) {
				setTimeout(() => {
					setWord(idx => idx + 1);
					setTime(0);
				}, 1000);
			}
		}
	}, [seconds]);

	return (
		<div>
			<div className='banner'>
				<h1>
					The best way to assess the quality of {animatedText}
					<span className='blinking-cursor'>|</span>
				</h1>
				<p>
					QualityHub offers the opportunity for anyone to have experienced
					professionals assess the quality of anything.
				</p>
				{localStorage.getItem('token') ? (
					<Link to='/dashboard'>
						<button className='start-btn'>
							Welcome! Go to your dashboard!
						</button>
					</Link>
				) : (
					<Link to='/signup'>
						<button className='start-btn'>Get Started</button>
					</Link>
				)}
			</div>
			<Features />
			<Panels />
		</div>
	);
};

export default LandingPage;
