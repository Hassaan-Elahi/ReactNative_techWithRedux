import { View,ToastAndroid, Text, TouchableWithoutFeedback } from 'react-native';

export const SelectLibrary = (libraryID) =>
{
    
    return {

    type: 'SelectLibrary',
    payload: libraryID

    };

};
