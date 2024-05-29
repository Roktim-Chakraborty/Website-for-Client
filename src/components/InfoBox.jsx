import { useState } from "react";
import { Modal } from "../components";

function InfoBox() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleBoxClick = (content) => {
        setModalContent(content);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setModalContent("");
    };

    return (
        <div>
            {/* Boxes to display info */}
            <div className="flex flex-wrap w-full gap-4 justify-around py-10 bg-slate-500">
                <div
                    className="h-40 w-80 bg-blue-500 rounded-lg cursor-pointer p-2"
                    onClick={() =>
                        handleBoxClick(
                            <div>
                                <p className="line-clamp-1 mb-3 font-bold">
                                    Introduction
                                </p>
                                <p className="line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores omnis, vel
                                    quisquam aut autem voluptate, eos quia odit
                                    exercitationem dicta ex nulla doloribus
                                    repellendus, labore doloremque optio laborum
                                    velit laudantium.
                                </p>
                            </div>
                        )
                    }
                >
                    <p className="line-clamp-1 mb-3 font-bold">Introduction</p>
                    <p className="line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores omnis, vel quisquam aut autem voluptate, eos
                        quia odit exercitationem dicta ex nulla doloribus
                        repellendus, labore doloremque optio laborum velit
                        laudantium.
                    </p>
                </div>
                <div
                    className="h-40 w-80 bg-yellow-500 rounded-lg cursor-pointer p-2"
                    onClick={() =>
                        handleBoxClick(
                            <div>
                                <p>Information</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores omnis, vel
                                    quisquam aut autem voluptate, eos quia odit
                                    exercitationem dicta ex nulla doloribus
                                    repellendus, labore doloremque optio laborum
                                    velit laudantium.
                                </p>
                            </div>
                        )
                    }
                >
                    <p>Information</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores omnis, vel quisquam aut autem voluptate, eos
                        quia odit exercitationem dicta ex nulla doloribus
                        repellendus, labore doloremque optio laborum velit
                        laudantium.
                    </p>
                </div>
                <div
                    className="h-40 w-80 bg-green-500 rounded-lg cursor-pointer p-2"
                    onClick={() =>
                        handleBoxClick(
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem, commodi!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores omnis, vel
                                    quisquam aut autem voluptate, eos quia odit
                                    exercitationem dicta ex nulla doloribus
                                    repellendus, labore doloremque optio laborum
                                    velit laudantium.
                                </p>
                            </div>
                        )
                    }
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem, commodi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores omnis, vel quisquam aut autem voluptate, eos
                        quia odit exercitationem dicta ex nulla doloribus
                        repellendus, labore doloremque optio laborum velit
                        laudantium.
                    </p>
                </div>
                <div
                    className="h-40 w-80 bg-pink-500 rounded-lg cursor-pointer p-2"
                    onClick={() =>
                        handleBoxClick(
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem, commodi!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores omnis, vel
                                    quisquam aut autem voluptate, eos quia odit
                                    exercitationem dicta ex nulla doloribus
                                    repellendus, labore doloremque optio laborum
                                    velit laudantium.
                                </p>
                            </div>
                        )
                    }
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem, commodi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores omnis, vel quisquam aut autem voluptate, eos
                        quia odit exercitationem dicta ex nulla doloribus
                        repellendus, labore doloremque optio laborum velit
                        laudantium.
                    </p>
                </div>
            </div>
            <Modal
                isVisible={isModalVisible}
                onClose={closeModal}
                content={modalContent}
            />
        </div>
    );
}

export default InfoBox;
