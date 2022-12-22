import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";


export type MessagePropsType = {
    message: MessageType
}


const Message = (props: MessagePropsType) => {
    const image = props.message.user.avatar
    const userName = props.message.user.name
    const textMessage = props.message.message.text
    const timeMessage = props.message.message.time
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>

            <div className={s.imageAndText}>
                <div className={s.avatar}>
                    <img
                        id={'hw1-avatar-' + props.message.id}
                        src={image}
                        alt={'You'}
                    />
                </div>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {userName}
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {textMessage}
                    </div>
                </div>

            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {timeMessage}
            </div>

        </div>
    )
}

export default Message
