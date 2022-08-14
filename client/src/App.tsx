import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';

import './App.css'



function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
					<Routing />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
