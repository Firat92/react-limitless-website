import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';
import Footer from './sections/Footer';

function App() {
	return (
		<>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/get' element={<GetInvolved />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<ContactUs />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
