import React, { useState } from 'react';
import { ReactComponent as Arrow } from 'assets/arrow-down.svg';
import logo from 'assets/logo.jpg';
import menuBackground from 'assets/brush-menu.png';
import IconButton from 'components/Buttons/IconButton/IconButton';
import {
	header,
	headerButton,
	headerButtonFlippedIcon,
	headerLogo
} from 'components/_sections/Header/Header.module.css';
import Container from 'layout/Container/Container';
import { LOGO_ALT_TEXT } from 'utils/constants/pageConstants';

const containerCustomClasses = [header];
const iconButtonClasses = [headerButton];
const ulStyles = { backgroundImage: `url(${menuBackground})` };

const Header = () => {
	const [activeNav, setActiveNav] = useState(false);
	const navStyles = { maxHeight: activeNav ? 240 : 0 };
	const buttonCustomClasses = activeNav ? [...iconButtonClasses, headerButtonFlippedIcon] : iconButtonClasses;

	function handleMenuButtonClick() {
		setActiveNav(!activeNav);
	}

	return (
		<header>
			<Container customClasses={containerCustomClasses}>
				<img
					alt={LOGO_ALT_TEXT}
					src={logo}
					className={headerLogo}
				/>
				<IconButton
					value='Menu'
					icon={<Arrow />}
					customClasses={buttonCustomClasses}
					onClick={handleMenuButtonClick}
				/>
				<nav style={navStyles}>
					<ul style={ulStyles}>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#services'>Services</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
						<li>
							<a href='#reviews'>Reviews</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};

Header.displayName = 'components/sections/Header';

export default Header;