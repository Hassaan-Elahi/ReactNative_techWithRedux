//import libraries for react ative

import React from 'react';
import { Text, View } from 'react-native';

//create component 


const Header = (props) =>
{ 
    return (

    <View style={styles.ViewStyle}>
     <Text style={styles.TextStyle}>{ props.children }</Text>
    </View>
    );
};

const styles = {

ViewStyle: {
    backgroundColor: '#000000',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 60,
    paddingTop: 0,
    shadowColor: '#d8d2d2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2

},

TextStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
    }


};


//export for use any where else in project 
export { Header };
