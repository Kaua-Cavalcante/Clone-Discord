import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="BjOrN"
                    date="26/03/2021"
                    content="Conversas, conversas, conversas..."
                />

                <ChannelMessage 
                    author="KeTzN"
                    date="26/03/2021"
                    content={
                        <>
                        <Mention>@everyone</Mention>, Bora um CS gente?
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage 
                    author="Bonner"
                    date="26/03/2021"
                    content="Bora!"
                />

                <ChannelMessage 
                     author="BjOrN"
                     date="26/03/2021"
                     content="Vamo, já estou entrando"
                 /> 
                </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );  
};

export default ChannelData;
