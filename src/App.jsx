import React from 'react';
import { GlobalProvider } from './localState/GlobalProvider';
import Navigation from './components/Navigation';
import NavList from './components/NavList';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

	return (
		<>
			<Navigation />
			<NavList />
			<Home />
			<Footer />
		</>
	)
}

function AppWithState(props) {
	return (
		<GlobalProvider>
			<App />
		</GlobalProvider>
	)
}
export default AppWithState;
