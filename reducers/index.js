import { combineReducers } from 'redux';

import authReducer from './authReducer';
import ipReducer from './ipReducer';
import nilaiReducer from './nilaiReducer';
import tugasReducer from './tugasReducer';
import jadwalReducer from './jadwalReducer';

const rootReducers = combineReducers({
    user: authReducer,
    ip: ipReducer,
    nilai: nilaiReducer,
    tugas: tugasReducer,
    jadwal: jadwalReducer
});

export default rootReducers;