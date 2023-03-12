import reactLogo from './assets/react.svg';
import './assets/css/App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/a' element={<PageA />} />
                <Route path='/b' element={<PageB />} />
                <Route path='/c' element={<PageC />} />
            </Route>
        </Routes>
    );
}

export default App;
