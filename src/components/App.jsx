import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Index from '../Pages/Index';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';

const App = () => {
  	return (
		<Router>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contacts' element={<Contacts />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</div>
		</Router>
  	);
};

export default App;
