import React from 'react';
import { Button, Tab, Image } from 'react-native-elements';
import chart1 from '../assets/image/chart1.jpeg';
import chart2 from '../assets/image/chart2.png';
// import chart3 from '../assets/image/chart3.jpeg';
// import chart4 from '../assets/image/chart4.png';
// import chart5 from '../assets/image/chart5.png';

export default function ChartTotals({navigation, route}) {

    return (
<>
        <Button 
        title='Go Back' 
        style='raised' 
        onPress={() => navigation.goBack()}/>
        <Tab>
        <Tab.Item title='Hours' />
        <Tab.Item title='Daily' />
        <Tab.Item title='Weekly' />
        <Tab.Item title='Monthly' />
        <Tab.Item title='Yearly' />
           </Tab>             
        <Image
        source={chart1 }
        style={{ width: 300, height: 200 }}
        />
        <Image
        source={chart2 }
        style={{ width: 300, height: 200 }}
        />
        {/* <Image
        source={chart3 }
        style={{ width: 400, height: 200 }}
        />
        <Image
        source={chart4 }
        style={{ width: 400, height: 200 }}
        />
        <Image
        source={chart5 }
        style={{ width: 400, height: 200 }}
        /> */}

</>
    )
}






// export function editFoodItem(foodItem) {
//     return (dispatch) => { dispatch({ type: 'EDIT_FOOD_ATTEMPT' });
//   return fetch(`http://localhost:3000/fooditems/${foodItem.id}`, {
//         method: 'PATCH',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(foodItem)
//           })
//           .then(resp => resp.json())
//           .then(foodItems => dispatch({ type: 'EDIT_FOOD_SUCCESS', payload: foodItems}))
//           .catch(error => dispatch({ type: 'EDIT_FOOD_ERROR', error: error.message }));


          /// reducers
        
// case 'EDIT_FOOD_ATTEMPT':
//       return {
//         ...state,
//          loading: true,
//          error: null
//       }
// case 'EDIT_FOOD_SUCCESS':
//       const newFoodItems = state.foodItems.map(foodObj => foodObj.id === action.id ? {foodObj: action.payload} : foodObj)
//     return {
//       ...state,
//       loading: false,
//       error: null,
//       foodItems: newFoodItems
//     };
// case 'EDIT_FOOD_ERROR':
//       return {
//         ...state,
//          loading: false,
//          error: action.error.message
//       };


// actions
// incrementing = (foodObject) => {
//     foodObject.itemnumber = foodObject.itemnumber + 1;
//     this.props.editFoodItem(foodObject)
//   }
// decrementing = (foodObject) => {
//     if(foodObject.itemnumber > 1) {
//       foodObject.itemnumber = foodObject.itemnumber - 1;
//       this.props.editFoodItem(foodObject);
//     }
//     else {
//       this.props.removeFromCredenza(foodObject.id)
//     }
//   }