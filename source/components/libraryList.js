import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';

class LibraryList extends Component 
{
  componentWillMount()
   {
    const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  //this will be called the number of items
  renderRow(row1) 
  {

        return (

        <ListItem 
        data={row1}
        
        />);
  }

  render() 
  {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
