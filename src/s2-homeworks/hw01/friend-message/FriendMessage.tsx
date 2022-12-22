import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import s2 from "../../../s1-main/App.module.css";

export type FriendMessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessagePropsType) => {
    const image = props.message.user.avatar
    const userName = props.message.user.name
    const textMessage = props.message.message.text
    const timeMessage = props.message.message.time

    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}>

            <div className={s.friendImageAndText}>

                <div className={s.avatar}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={image}
                    alt={'Friend'}/>
                </div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}>
                        {userName}
                    </div>
                    <div
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}>
                        {textMessage}
                    </div>

                </div>

            </div>



            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}>
                {timeMessage}
            </div>
        </div>
    )
}

export default FriendMessage
