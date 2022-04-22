import { reactive, watch } from "vue";
import connectMetamask from '/connectMetamask'

const defaultState = {
    address: "",
    signer: null,
    status: false
}

const STATE_NAME = 'useState'
const getDefaultState = () => {
    if (localStorage.getItem(STATE_NAME) !== null) {
        return JSON.parse(localStorage.getItem(STATE_NAME))
    }

    return defaultState
}


const state = reactive(getDefaultState);

const actions = {
    connectMetamask
}

watch(
    () => state,
    () => {
        localStorage.setItem(STATE_NAME, JSON.stringify(state))
    }
)

export default () => {
    if (localStorage.getItem(STATE_NAME) === null) {
        localStorage.setItem(STATE_NAME, JSON.stringify(defaultState))
    }
    return {
        
    }
    state,
    ...actions
}
