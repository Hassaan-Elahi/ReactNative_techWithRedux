
const SelectlibReducer = (state = null, action) =>
{

switch (action.type)
{
    case 'SelectLibrary':
    return action.payload;

    default:
    return state;
}
 

};


export default SelectlibReducer;
