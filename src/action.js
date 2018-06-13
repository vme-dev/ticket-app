export function CHANGE_STOPS(e, index) {
    return {
        target: e,
        type: 'CHANGE_STOPS',
        index: index,
    }
};

export function CHANGE_ALL(e) {
    console.log(e);
    return {
        target: e,
        type: 'CHANGE_ALL',

    }
};
export function CHANGE_CURRENCY(e, value) {

    return {
        target: e,
        type: 'CHANGE_CURRENCY',
        cuurName: value,
    }
};
export function CHANGE_ONLY(index) {

    return {
        type: 'CHANGE_ONLY',
        index: index,
    }
};
export function LOAD_DATA(data) {

    return {
        type: 'CHANGE_ONLY',
        data: data,
    }
};
export function LOAD(data) {

    return {
        type: 'LOAD',
        data: data,
    }
};