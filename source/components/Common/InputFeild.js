import React from 'react';
import { View, Text, TextInput, } from 'react-native';

const InputFeild = (props) => 
{
   return (
    
    <View style={styles.containerStyle}>
    
        <Text style={styles.labelStyle}>{props.lable}</Text>
        <TextInput 
        autoCorrect={false}
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        
        />
    
    </View>
        
   ); 
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 20,
    flex: 2
  },

  labelStyle: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 20,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { InputFeild };

