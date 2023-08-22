import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Index from '../Pages/Index';

const App = () => {
  	return (
		<Router>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Index />} />
				</Routes>
			</div>
		</Router>
  	);
};

export default App;
