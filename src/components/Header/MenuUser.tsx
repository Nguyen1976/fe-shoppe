import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '~/redux/store';
import { resetUser } from '~/redux/userSlice';
import Image from '~/components/Image';
import config from '~/configs';
import Tooltip from '../Tooltip';

export default function MenuUser() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        dispatch(resetUser());
        navigate(config.routes.signIn);
    };
    return (
        <div>
            {user?.name ? (
                <Tooltip
                    funcRender={() => (
                        <div className="w-full">
                            <div
                                className="text-black hover:text-green-500 hover:bg-zinc-50 px-2 py-3 text-sm cursor-pointer"
                                onClick={() => navigate(config.routes.profile)}
                            >
                                Tài khoản của tôi
                            </div>
                            <div className="text-black hover:text-green-500 hover:bg-zinc-50 px-2 py-3 text-sm cursor-pointer">
                                <Link to={config.routes.purchase}>Đơn mua</Link>
                            </div>
                            <div
                                className="text-black hover:text-green-500 hover:bg-zinc-50 px-2 py-3 text-sm cursor-pointer"
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </div>
                        </div>
                    )}
                    top={35}
                    right={0}
                    width={150}
                    afterArrow={true}
                    scaleTop={true}
                >
                    <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full overflow-hidden">
                            <Image src={user.avatar ?? ''} alt={`avartar`} />
                        </div>
                        <div className="ml-1 text-md">{user.name}</div>
                    </div>
                </Tooltip>
            ) : (
                <div className="flex gap-2">
                    <Link
                        className="hover:opacity-50"
                        to={config.routes.signUp}
                    >
                        Đăng kí
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link
                        className="hover:opacity-50"
                        to={config.routes.signIn}
                    >
                        Đăng nhập
                    </Link>
                </div>
            )}
        </div>
    );
}
