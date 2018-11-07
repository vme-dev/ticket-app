import { combineReducers } from 'redux';

var initState = {
    index: true, 
    transferArr: [], 
    all: true, 
    currency: 1, 
    currencyName: "rub", 
    serverData: null, 
    loadData: false,
};

const appState = (state =  initState , action) => {

    function toCheckTransferArr(arr) {
        
        for (var i = 0; i < arr.length; i++) {
            if ( arr[i] != null || arr[i] != undefined) {
                return false;
            }
        }
        return true;
    }

    switch (action.type) {

        case 'CHANGE_STOPS':
            {   let a = state.transferArr;
                a[action.index] = a[action.index] ?null:action.index;

                let all = toCheckTransferArr(state.transferArr);
                console.log("one");
                if (state.all) {
                    a = [];
                    a[action.index] = a[action.index] ?null:action.index;
                }
                return Object.assign({}, state, {
                    transferArr: a,
                    all:all,
                });
                break;
            }

        case 'CHANGE_ONLY':
            {   let a = [];
                a[action.index] = a[action.index];

                let all = toCheckTransferArr(state.transferArr);

                return Object.assign({}, state, {
                    transferArr: a,
                    all:all,
                });
                break;
            }

        case 'CHANGE_ALL':{

                let all = toCheckTransferArr(state.transferArr);
                
                if (all) { 
                    return Object.assign({}, state, {});
                    
                }
                
                return Object.assign({}, state, {
                    all:!state.all
                });
                break;
            }

        case 'CHANGE_CURRENCY': {
            
                var value;

                if ( action.cuurName == "rub") { value = 1;}
                if ( action.cuurName == "usd") { value = 1.5;}
                if ( action.cuurName == "eur") { value = 2.5;}

                return Object.assign({}, state, {
                    currencyName:action.cuurName,
                    currency:value,
                });
                break;
            }

        case 'LOAD_DATA': {
           
                return Object.assign({}, state, {
                    serverData: action.data,
                    loadData:true,
                });
                break;      
            }

        case 'LOAD': {
          
                var str = action.data;
                var parsStr = JSON.parse(str);
                console.log(parsStr);

                return Object.assign({}, state, {
                    serverData: parsStr.tickets,
                    loadData:true,
                    
                });
                break;
            }

        default:
            return state
    }
};

const reduser = combineReducers({
    appState,
});

export default reduser;