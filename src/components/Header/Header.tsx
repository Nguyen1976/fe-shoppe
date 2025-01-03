import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSelector } from 'react-redux';

import config from '~/configs';
import images from '~/assets/images';
import TopHeader from './TopHeader';
import Cart from './Cart';

function Header() {
    const [isInputFocus, setIsInputFocus] = useState(false);

    // const navigate = useNavigate();

    const hotSearch = [
        {
            title: 'Săn sale 1k điện thoại',
            path: '/',
        },
        {
            title: 'Túi mù phát sáng',
            path: '/',
        },
        {
            title: 'Áo khoác',
            path: '/',
        },
        {
            title: 'Gấu bông',
            path: '/',
        },
        {
            title: 'Son',
            path: '/',
        },
        {
            title: 'Xe máy wave 110cc',
            path: '/',
        },
        {
            title: 'Sửa rửa mặt',
            path: '/',
        },
        {
            title: 'Thước kẻ free ship 30cm',
            path: '/',
        },
    ];

    return (
        <header className="bg-header py-2 sticky top-0 z-40">
            <div className="text-white container-custom">
                {/*TopHeader*/}
                <TopHeader />
                <div className="flex justify-between items-center mt-6">
                    <div className="w-2/12">
                        <Link to={config.routes.home}>
                            <img
                                className="object-cover"
                                src={images.logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="w-2/3 relative">
                        <label className="bg-white text-black flex items-center gap-2 rounded-sm px-1 h-11">
                            <input
                                type="text"
                                className="grow outline-none"
                                placeholder="Shoppe bao ship 0Đ - Đăng ký ngay!"
                                onFocus={() => setIsInputFocus(true)}
                                onBlur={() => setIsInputFocus(false)}
                            />
                            <button className="bg-primary border-none outline-none h-5/6 w-1/12 text-white">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </label>
                        <div className="flex gap-2 text-sm mt-2 overflow-hidden">
                            {hotSearch.map((item, index) => (
                                <a
                                    className="whitespace-nowrap"
                                    key={`key-hot-search-${index}`}
                                    href={item.path}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        {isInputFocus && (
                            <ul className="bg-white w-full h-auto top-12 absolute shadow-lg">
                                <li className="px-2 py-3 text-black hover:bg-[#fafafa]">
                                    Shoppe bao ship 0Đ - Đăng ký ngay!
                                </li>
                            </ul>
                        )}
                    </div>
                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
