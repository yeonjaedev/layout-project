import {useState} from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    const pageList = [
        {path: 'a', element: 'Page A'},
        {path: 'b', element: 'Page B'},
        {path: 'c', element: 'Page C'},
    ];
    const [selectedMenu, setSelectedMenu] = useState<string>('');
    return (
        <>
            <div className='menu'>
                {pageList.map((page, index) => (
                    <div className='menuList' key={index}>
                        <Link to={`/${page.path}`} onClick={() => setSelectedMenu(page.path)} className={page.path === selectedMenu ? 'selected' : ''}>
                            {page.element}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Menu;
