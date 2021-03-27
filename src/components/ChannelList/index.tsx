import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="cod-warzone" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="música" />
        </Container>
    );  
};

export default ChannelList;
