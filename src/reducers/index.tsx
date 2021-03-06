import { createStore, applyMiddleware, combineReducers, Reducer, AnyAction } from 'redux';

import { userProfileReducer } from "./userProfile";
import { usersReducer } from "./users";



interface TestInterface{
	testVal1: string
	testVal2: number 
}

const testInitState: TestInterface = {
	testVal1: "fooo",
	testVal2: 1
}

class TestClass{
	reducer(state:TestInterface = testInitState, action: AnyAction){
		console.log("I'M a rogue reducer from a class")
		return state
	}

}

const test = new TestClass
const class_reducer = test.reducer as Reducer<any>

export default combineReducers({
        "users": usersReducer,
        "userProfile": userProfileReducer,
        "rougeReducer": class_reducer
})