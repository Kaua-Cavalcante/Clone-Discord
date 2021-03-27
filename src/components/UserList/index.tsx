import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Bonner" />
            <UserRow nickname="Deri" />
            <UserRow nickname="Leeh" />
            <UserRow nickname="Burny" />
            <UserRow nickname="biell" />
            

            <Role>Offline - 17</Role>
            <UserRow nickname="KeTzN" isBot />
            <UserRow nickname="Prinsketa" />
            <UserRow nickname="12Gbielstana" />
            <UserRow nickname="Iarley" />
            <UserRow nickname="Dalfus" />
            <UserRow nickname="Jãoo" />
            <UserRow nickname="Luvv" />
            <UserRow nickname="Mavis" />
            <UserRow nickname="Giovane" />
            <UserRow nickname="Rodrigo" />
            <UserRow nickname="Saturno" />
        </Container>
    );  
};

export default UserList;
