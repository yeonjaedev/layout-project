import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className='menu'>
                <div className='menuList'>
                    <Link to='/1'>Page One</Link>
                </div>
                <div className='menuList'>
                    <Link to='/2'>Page Two</Link>
                </div>
                <div className='menuList'>
                    <Link to='/3'>Page Three</Link>
                </div>
            </div>
        </>
    );
};
export default Menu;
