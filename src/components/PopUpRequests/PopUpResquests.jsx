import React from "react";
import Popup from "reactjs-popup";
import { RequestButton, ModalContainer, CloseBtn } from "./PopUpRequestsStyled";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";

const PopUpResquests = ({ status, data }) => {
    return (
        <div>
            <Popup
                trigger={<RequestButton status={status}> View Notes </RequestButton>}
                modal
                nested
            >
                {(close) =>
                    status === "Booked" && (
                        <ModalContainer>
                            {data}
                            <CloseBtn className="close" onClick={close}>
                                <AiOutlineCloseCircle />
                            </CloseBtn>
                        </ModalContainer>
                    )
				}
            </Popup>
        </div>
    );
};

export default PopUpResquests;
