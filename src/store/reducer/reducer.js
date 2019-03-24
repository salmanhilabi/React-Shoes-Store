const multiplyPrice = (itemArray, item) => {
  let newArr = itemArray.map(reduxItem => {
     if(reduxItem.id === item.id){
       reduxItem.price = reduxItem.price + reduxItem.mainprice
       reduxItem.qty = reduxItem.qty + 1
       return reduxItem
     }else{
      return reduxItem
     }
  })
  return newArr;
};
const dividePrice = (itemArray, item) => {
  let newArr = itemArray.map(reduxItem => {
     if(reduxItem.id === item.id){
       if(reduxItem.qty <= 1){
         reduxItem.qty = 1
       }else{
         reduxItem.qty = reduxItem.qty - 1
         reduxItem.price = reduxItem.price - reduxItem.mainprice
       }
       return reduxItem
     }else{
      return reduxItem
     }
  })
  return newArr;
};
const addItem = (state, item)=>{
  let newObject = [...state, item];
  let newArr = newObject.map(reduxItem => {
    if(reduxItem.id === item.id){
      reduxItem.itemAdded = 'ADDED TO CART'
      return reduxItem
    }else{
      return reduxItem
    }
  })
  return newArr;
}
const reducer = (state = [], action) =>{
  switch (action.type) {
    case 'Add':
      return addItem(state, action.payload)
    case 'removeCart':
      const targetItemIndex = state.indexOf(action.payload);
      return state.filter((item, index) => index !== targetItemIndex)
    case 'multiplyPrice':
         return multiplyPrice(state, action.payload)
    case 'dividePrice':
         return dividePrice(state, action.payload)
    default:
      return state;
  }
}
export default reducer;
