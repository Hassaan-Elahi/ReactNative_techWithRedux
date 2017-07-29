import React, { Component } from 'react';

import { View, 
ToastAndroid,
LayoutAnimation,
Text, 
TouchableWithoutFeedback,
NativeModules
 } from 'react-native';

import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as Actions from '../Actions';


const dummy = NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);


class ListItem extends Component
{

    
    componentWillUpdate()
    {
      LayoutAnimation.spring();  
    }

    renderDesctiption()
    {
        if (this.props.selectionID === this.props.data.id)
            {
               
                return <Text>{this.props.data.description }</Text>;
            }

    }

    renderText()
    {
        if (this.props.data.id === this.props.selectionID)
        {
             return ({
            fontSize: 18,
            paddingLeft: 10,
            color: 'black',
            backgroundColor: '#c0dd92',
            flex: 1

            });
        }
        else 
        {
            return ({
            fontSize: 18,
            paddingLeft: 10,
            color: 'black',

            });

        }    
        
    }

    render()
    {
         
        return (
            <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(this.props.data.id)} >    
                <View>
                    <CardSection>

                        <Text style={this.renderText()}>

                            { this.props.data.title }

                        </Text>

                    </CardSection>
                    {this.renderDesctiption()}
                    
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

const mapStateToPops = (state) =>
{
  
    return { selectionID: state.selectionID };

}

export default connect(mapStateToPops, Actions)(ListItem);

