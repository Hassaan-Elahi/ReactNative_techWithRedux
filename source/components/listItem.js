import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as Actions from '../Actions';



class ListItem extends Component
{


    render()
    {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(this.props.data.id)} >    
                <View>
                    <CardSection>

                        <Text style={styles.titleStyle}>

                            { this.props.data.title }

                        </Text>

                    </CardSection>
                </View>
            </TouchableWithoutFeedback>    
        );
    }
}

const styles = {
  
    titleStyle: {
    fontSize: 18,
    paddingLeft: 10,
    color: 'black',
    
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default connect(null, Actions)(ListItem);

