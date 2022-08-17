import React, { useState } from "react";

import Navbar from '../../components/Navbar/landingNavbar';
import Hero from '../../components/Hero/hero';
import Banner from '../../components/Banner/banner';
import About from '../../components/About/about';

const LandingScreen = () => {


	return (
		<>
            <Navbar />
                <Hero />
				<Banner />
				<About />
		</>
	);
};

export default LandingScreen;
