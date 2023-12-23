import {configureStore} from '@reduxjs/toolkit'
import FetchAct from './slice/FetchAct';



const store = configureStore({
    reducer : {
        FetchData : FetchAct
    }
})


export {store};