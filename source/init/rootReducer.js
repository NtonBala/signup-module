// Core
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    ui,
    form,
});
