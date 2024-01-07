import {configureStore} from '@reduxjs/toolkit'
import FetchAct from './slice/FetchAct';
import Loggeduser from './slice/Loggeduser';
import Message from './slice/Message';



const store = configureStore({
    reducer : {
        FetchData : FetchAct,
        user  : Loggeduser,
        message : Message,
    }
})


export {store};