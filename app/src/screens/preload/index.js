import React, { useState } from 'react'
import {
    Container,
    TextInputArea,
    TextInput,

    ConfirmButton,
    ConfirmButtonText
} from './styles';

import Api from '../../Api';

export default () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user_name, setUser_name] = useState("");
    const [name, setName] = useState("");

    const handleConfirmButton = async() =>{

        let req = await Api.register(email, name, user_name, password);
        console.log(req);
    }

    return (
        <Container>
            <TextInputArea>
                <TextInput
                    placeholder = "Email"
                    onChangeText = {(t) => setEmail(t)}
                />
            </TextInputArea>
            <TextInputArea>
                <TextInput
                    placeholder = "Password"
                    onChangeText = {(t) => setPassword(t)}
                
                
                />
            </TextInputArea>
            <TextInputArea>
                <TextInput
                    placeholder = "UserName"
                    onChangeText = {(t) => setUser_name(t)}
                />
            </TextInputArea>
            <TextInputArea>
                <TextInput
                    placeholder = "Name"
                    onChangeText = {(t) => setName(t)}

                />
            </TextInputArea>
            <ConfirmButton
                onPress = {handleConfirmButton}
            >
                <ConfirmButtonText>Registrar</ConfirmButtonText>
            </ConfirmButton>

        </Container>
    )

}