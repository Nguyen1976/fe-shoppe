// import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
    email: string;
    password: string;
}

function FormSignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

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
            <div className="mt-5">
                <input
                    className={`w-full border-[1px] border-[#adadad] p-2 outline-custom
                  ${errors.password ? 'bg-red-100 outline-red-300' : ''}`}
                    placeholder="Mật khẩu"
                    {...register('password', {
                        required: 'Hãy nhập mật khẩu',
                        pattern: {
                            value: /^.{6,16}$/,
                            message: 'Mật khẩu phải dài từ 6 đến 16 ký tự',
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-xs text-[#f33a58] ml-2 select-none">
                        {errors.password?.message as string}
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

export default FormSignIn;
