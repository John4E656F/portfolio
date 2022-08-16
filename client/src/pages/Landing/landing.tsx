import React, { useState } from "react";

import Navbar from '../../components/Navbar/landingNavbar';
import Hero from '../../components/Hero/hero';
import Banner from '../../components/Banner/banner';

const LandingScreen = () => {


	return (
		<>
            <Navbar />
                <Hero />
				<Banner />
		</>
	);
};

export default LandingScreen;
