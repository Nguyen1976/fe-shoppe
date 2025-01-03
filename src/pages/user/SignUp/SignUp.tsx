import React from 'react';
import FormSignUp from './FormSignUp';
import { Link } from 'react-router-dom';
import config from '~/configs';

export default function SignUp() {
    return (
        <div className="flex justify-end">
            <div className="bg-white p-5 w-96">
                <div className="text-xl font-normal">Đăng ký</div>
                <FormSignUp />
                <div className="flex mt-6 mx-auto items-center">
                    <div className="bg-[#dbdbdb] h-[1px] w-2/5"></div>
                    <span className="w-1/5 text-center text-[#dbdbdb] text-sm">
                        HOẶC
                    </span>
                    <div className="bg-[#dbdbdb] h-[1px] w-2/5"></div>
                </div>
                <div className="mt-6 flex gap-4 justify-between">
                    <button className="w-1/2 border-2 p-2">Facebook</button>
                    <button className="w-1/2 border-2 p-2">Google</button>
                </div>
                <div className="text-xs mt-5 text-center px-10">
                    Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
                    <a className="text-primary" href="/">
                        Điều khoản dịch vụ
                    </a>{' '}
                    &{' '}
                    <a className="text-primary" href="/">
                        Chính sách bảo mật
                    </a>
                </div>
                <div className="text-center text-sm mt-5 text-[#8b8b8b]">
                    Bạn đã có tài khoản?{' '}
                    <Link className="text-primary" to={config.routes.signIn}>
                        {' '}
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}
