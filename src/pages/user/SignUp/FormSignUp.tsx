import { useForm } from 'react-hook-form';

interface IFormInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function FormSignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormInput>();
    const password = watch('password');

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        //call api login
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <input
                    className={`w-full border-[1px] border-[#adadad] p-2 outline-custom
                  ${errors.email ? 'bg-red-100 outline-red-300' : ''}`}
                    placeholder="Email"
                    {...register('email', {
                        required: 'Hãy nhập email',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: 'Địa chỉ email không hợp lệ',
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-xs text-[#f33a58] ml-2 select-none">
                        {errors.email.message as string}
                    </p>
                )}
            </div>
            <div className="mt-4">
                <input
                    className={`w-full border-[1px] border-[#adadad] p-2 outline-custom
                  ${errors.password ? 'bg-red-100 outline-red-300' : ''}`}
                    placeholder="Mật khẩu"
                    {...register('password', {
                        required: 'Hãy nhập mật khẩu',
                        pattern: {
                            value: /^.{6,16}$/,
                            message: 'Mật khẩu không hợp lệ',
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-xs text-[#f33a58] ml-2 select-none">
                        {errors.password?.message as string}
                    </p>
                )}
            </div>
            <div className="mt-4">
                <input
                    className={`w-full border-[1px] border-[#adadad] p-2 outline-custom
                  ${
                      errors.confirmPassword ? 'bg-red-100 outline-red-300' : ''
                  }`}
                    placeholder="Nhập lại mật khẩu"
                    {...register('confirmPassword', {
                        required: 'Hãy nhập lại mật khẩu',
                        validate: (value) =>
                            value === password || 'Mật khẩu không khớp',
                    })}
                />
                {errors.confirmPassword && (
                    <p className="text-xs text-[#f33a58] ml-2 select-none">
                        {errors.confirmPassword?.message as string}
                    </p>
                )}
            </div>
            <button
                className={`bg-primary w-full text-white p-2 select-none mt-4 ${
                    errors.email || errors.password
                        ? 'cursor-not-allowed backdrop-blur-[2px] bg-opacity-70'
                        : 'cursor-pointer'
                }`}
                type="submit"
            >
                Đăng nhập
            </button>
        </form>
    );
}
