import React, { useState } from "react";

import Navbar from '../../components/Navbar/landingNavbar';
import Hero from '../../components/Hero/hero';
import Banner from '../../components/Banner/banner';
import About from '../../components/About/about';
import Works from '../../components/Works/Works';
import Footer from '../../components/Footer/footer';

const LandingScreen = () => {


	return (
		<>
            <Navbar />
                <Hero />
				{/* <Banner />
				<About />
				<Works />
			<Footer /> */}
		</>
	);
};

export default LandingScreen;
