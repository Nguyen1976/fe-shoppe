import { Link } from 'react-router-dom';
import FormSignIn from './FormSignIn';
import config from '~/configs';

export default function SignIn() {
    return (
        <div className="flex justify-end">
            <div className="bg-white p-5 w-96">
                <div className="text-xl font-normal">Đăng nhập</div>
                <FormSignIn />
                <div className="flex mt-8 mx-auto items-center">
                    <div className="bg-[#dbdbdb] h-[1px] w-2/5"></div>
                    <span className="w-1/5 text-center text-[#dbdbdb] text-sm">
                        HOẶC
                    </span>
                    <div className="bg-[#dbdbdb] h-[1px] w-2/5"></div>
                </div>
                <div className="mt-8 flex gap-4 justify-between">
                    <button className="w-1/2 border-2 p-2">Facebook</button>
                    {/* <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => console.error('Login Failed')}
                    /> */}
                </div>
                <div className="text-center text-sm mt-6 text-[#8b8b8b]">
                    Bạn mới biết đến Shopee?{' '}
                    <Link className="text-primary" to={config.routes.signUp}>
                        {' '}
                        Đăng ký
                    </Link>
                </div>
            </div>
        </div>
    );
}
