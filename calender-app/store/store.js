import { reminderReducer } from '../reducers/reminderReducer';
import {createStore} from 'redux';

export const store= createStore(reminderReducer);
console.log("inside store..",store);