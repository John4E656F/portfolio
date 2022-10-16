import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";

import darkTheme from './theme';
import {
	ThemeProvider,
	CssBaseline,
	useTheme
  } from '@mui/material'

import './App.css'
import ParticlesBG from './Utils/Tsparticle'


function App() {
	const theme = useTheme();

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<ParticlesBG />
				<div
        		  style={{
        		    position: "absolute",
        		    top: 0,
        		    left: 0,
        		    width: "100%",
        		    height: "100%"
        		  }}
        		>
					<Routing />
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
