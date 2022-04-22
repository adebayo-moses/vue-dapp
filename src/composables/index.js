import { reactive } from "vue";
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

const state = reactive(defaultState);

const actions = {
    connectMetamask
}

export default  => {

    state,
    ...actions
}
