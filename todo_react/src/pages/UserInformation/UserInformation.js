/** @jsxImportSource @emotion/react */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InformationButton from "../../components/InformationButton/InformationButton";
import IntroduceInfo from "../../components/IntroduceInfo/IntroduceInfo";
import UserInfo from "../../components/UserInfo/UserInfo";
import * as S from "./style";

const UserInformation = () => {
    const [isModify, setIsModify] = useState(false);
    const [photo, setPhoto] = useState("");
    const [userInfo, setUserInfo] = useState(
        JSON.parse(
            localStorage.getItem("userInfo") === null
                ? ""
                : localStorage.getItem("userInfo")
        )
    );

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }, [userInfo]);

    const changePhoto = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();

        if (file.size === undefined) {
            return;
        }

        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            const photoSrc = e.target.result;
            setPhoto(photoSrc);
            localStorage.setItem("infoPhote", photoSrc);
        };
    };

    const changeInfo = (e) => {
        const { id, value } = e.target;
        setUserInfo({ ...userInfo, [id]: value });
    };

    const onModify = () => {
        setIsModify(true);
    };

    const onCheck = () => {
        setIsModify(false);
    };
    return (
        <div css={S.mainContainer}>
            <header css={S.mainHeader}>
                <h1 css={S.mainTitle}>User Information</h1>
            </header>
            <div
                css={S.infoPhoto}
                onClick={() => document.getElementById("photo-file").click()}
            >
                <div>
                    <input
                        type="file"
                        css={S.photoFile}
                        name="file"
                        id="photo-file"
                        onChange={changePhoto}
                    />
                </div>
                <img src={photo || "images/noimage.png"} alt="" />
                <div css={S.changeNav}>클릭하여 이미지 변경</div>
            </div>
            <div css={S.infoMain}>
                <h1 css={S.infoTitle}>
                    About Me
                    <InformationButton
                        isModify={isModify}
                        onModify={onModify}
                        onCheck={onCheck}
                    />
                </h1>
                <div css={S.infoDetail}>
                    <div css={S.detailLeft}>
                        <UserInfo
                            id="name"
                            onChange={changeInfo}
                            value={userInfo.name}
                            isModify={isModify}
                        >
                            Name
                        </UserInfo>
                        <UserInfo
                            id="email"
                            onChange={changeInfo}
                            value={userInfo.email}
                            isModify={isModify}
                        >
                            E-mail
                        </UserInfo>
                    </div>
                    <div css={S.detailRight}>
                        <UserInfo
                            id="phone"
                            onChange={changeInfo}
                            value={userInfo.phone}
                            isModify={isModify}
                        >
                            Phone
                        </UserInfo>
                        <UserInfo
                            id="github"
                            onChange={changeInfo}
                            value={userInfo.github}
                            isModify={isModify}
                        >
                            Github
                        </UserInfo>
                    </div>
                </div>
                <div>
                    <h1 css={S.infoTitle}>Self Introduction</h1>
                    <IntroduceInfo
                        id="introduce"
                        onChange={changeInfo}
                        value={userInfo.introduce}
                        isModify={isModify}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserInformation;
