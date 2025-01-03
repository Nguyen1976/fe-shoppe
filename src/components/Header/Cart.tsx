import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Tooltip from '../Tooltip';

export default function Cart() {
    return (
        <div className="mr-24">
            <Tooltip
                funcRender={() => {
                    //Phải trong trạng thái đăng nhập thì mới có giỏ hàng

                    return (
                        <div className="w-full">
                            <ul className="p-2">
                                <li className="text-zinc-500 text-sm py-2">
                                    Sản phẩm mới thêm...
                                </li>
                                {/* {listOrderProduct.orderItems
                                                .slice(0, 5)
                                                .map((item, index) => {
                                                    return (
                                                        <li
                                                            className="flex justify-between p-2"
                                                            key={`cart-${index}`}
                                                        >
                                                            <div className="flex ml-2">
                                                                <img
                                                                    className="object-cover h-12 border-1"
                                                                    src={
                                                                        item.image
                                                                    }
                                                                    alt=""
                                                                />
                                                                <div className="w-60 h- line-clamp-1 truncate text-black ml-2">
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                            <div className="text-primary text-sm">
                                                                {item.price}đ
                                                            </div>
                                                        </li>
                                                    );
                                                })} */}
                                {/* <li className="text-black text-sm p-2 flex items-center justify-between">
                                                <div>
                                                    {listOrderProduct.orderItems
                                                        .length -
                                                        5 >=
                                                    0
                                                        ? listOrderProduct
                                                              .orderItems
                                                              .length - 5
                                                        : 0}{' '}
                                                    Thêm hàng vào sản phẩm
                                                </div>
                                                <button
                                                    className="bg-primary text-white py-2 px-6"
                                                    onClick={() =>
                                                        navigate(
                                                            config.routes.order
                                                        )
                                                    }
                                                >
                                                    Xem giỏ hàng
                                                </button>
                                            </li> */}
                            </ul>
                        </div>
                    );
                }}
                top={35}
                right={0}
                width={400}
                afterArrow={true}
                scaleTopRight={true}
            >
                <FontAwesomeIcon className="text-2xl" icon={faCartShopping} />
            </Tooltip>
        </div>
    );
}
