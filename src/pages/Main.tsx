import {Link, Outlet} from 'react-router-dom';
import Top from '../components/Top';
import Menu from '../components/Menu';
import Content from '../components/Content';

const Main = () => {
    return (
        <>
            <Top />
            <Menu />
            <Outlet />
        </>
    );
};
export default Main;
