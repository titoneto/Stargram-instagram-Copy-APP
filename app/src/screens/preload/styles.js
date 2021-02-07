import React from 'react'
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #123456;

    justify-content: center;
    align-items:center;
`

export const TextInputArea = styled.View`
    padding: 10px;
    background-color: #e6e6e6;

    height: 60px;
    width: 200px;
`

export const TextInput = styled.TextInput`
    flex:1
`

export const ConfirmButton = styled.TouchableOpacity`
    background-color: #900000

`

export const ConfirmButtonText = styled.Text`
    font-size: 22px;
`