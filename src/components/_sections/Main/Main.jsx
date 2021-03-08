import React from 'react';
import About from 'components/_sections/Main/About/About';
import Contact from 'components/_sections/Main/Contact/Contact';
import Hero from 'components/_sections/Main/Hero/Hero';
import Projects from 'components/_sections/Main/Projects/Projects';
import Reviews from 'components/_sections/Main/Reviews/Reviews';
import Services from 'components/_sections/Main/Services/Services';
import MessageBanner from 'components/MessageBanner/MessageBanner';

const Main = () => {
	return (
		<main id='main'>
			<MessageBanner text='Free Estimates!' />
			<Hero />
			<About />
			<Services />
			<Projects />
			<Reviews />
			<Contact />
		</main>
	);
};

Main.displayName = 'components/sections/Main';

export default Main;