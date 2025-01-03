import React from 'react';
import {
    faFacebook,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faEarthAsia } from '@fortawesome/free-solid-svg-icons';



import Tooltip from '~/components/Tooltip';

import images from '~/assets/images';
import MenuUser from './MenuUser';

function TopHeader() {
    

    return (
        <div className="flex justify-between text-sm text-white items-center">
            <div className="flex gap-2 items-center">
                <div className="hover:opacity-50">
                    <a href="/">Kênh người bán</a>
                </div>
                <span className="opacity-30">|</span>
                <div className="hover:opacity-50">
                    <a href="/">Trở thành người bán shoppe</a>
                </div>
                <span className="opacity-30">|</span>
                <Tooltip
                    funcRender={() => (
                        <div className="w-full">
                            <div className="flex justify-center">
                                <img src={images.qrcode} alt="qr code" />
                            </div>
                            <div className="flex flex-wrap px-3 gap-4">
                                <img
                                    className="w-2/5"
                                    src={images.appstore}
                                    alt="app store"
                                />
                                <img
                                    className="w-2/5"
                                    src={images.googleplay}
                                    alt="google play"
                                />
                                <img
                                    className="w-2/5"
                                    src={images.appgallery}
                                    alt="app gallery"
                                />
                            </div>
                        </div>
                    )}
                    top={35}
                    left={0}
                    width={208}
                    afterArrow={false}
                    fadeIn={true}
                >
                    <a className="hover:opacity-50" href="/">
                        Tải ứng dụng
                    </a>
                </Tooltip>

                <span className="opacity-30">|</span>

                <div className="flex gap-2">
                    <div>Kết nối</div>
                    <div>
                        <a href="/" title="Kết nối facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <div>
                        <a href="/" title="Kết nối Instargram">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="hover:opacity-50">
                    <a href="/">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                        <span className="pl-1">Hỗ trợ</span>
                    </a>
                </div>
                <div>
                    <Tooltip
                        funcRender={() => (
                            <div className="w-full z-auto">
                                <div className="text-black hover:text-primary p-2 text-sm">
                                    Tiếng việt
                                </div>
                                <div className="text-black hover:text-primary p-2 text-sm">
                                    English
                                </div>
                            </div>
                        )}
                        top={35}
                        right={0}
                        width={150}
                        afterArrow={true}
                        scaleTop={true}
                    >
                        <a className="hover:opacity-50" href="/">
                            <FontAwesomeIcon icon={faEarthAsia} />
                            <span className="pl-1 pr-1">Tiếng việt</span>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </Tooltip>
                </div>
                <MenuUser />
            </div>
        </div>
    );
}

export default React.memo(TopHeader);
