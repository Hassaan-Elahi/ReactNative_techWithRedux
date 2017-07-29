import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer';
import SelectlibReducer from './SelectionReducer';


export default combineReducers({
  libraries: LibraryReducer,
  selectionID: SelectlibReducer

});
