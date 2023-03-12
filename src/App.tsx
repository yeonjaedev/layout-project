import reactLogo from './assets/react.svg';
import './assets/css/App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageThree';
import PageThree from './pages/PageTwo';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/1' element={<PageOne />} />
            <Route path='/2' element={<PageTwo />} />
            <Route path='/3' element={<PageThree />} />
        </Routes>
    );
}

export default App;
