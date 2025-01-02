import FormSignIn from './FormSignIn';

export default function SignIn() {
    return (
        <div className="flex justify-end">
            <div className="bg-white p-5 w-96">
                <div className="text-xl font-normal">Đăng nhập</div>
                <FormSignIn />
            </div>
        </div>
    );
}
