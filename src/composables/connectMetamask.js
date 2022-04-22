import { ethers } from "ethers";
import { connect } from './index';

const connectMetamask = async () => {
    const { state } = connect();
    if (state.address = "") {
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert('Metamask is not installed!');
                return;
            }
            const accounts = await ethereum.request ({
                method: "eth_requestAccounts"
            })
            console.log("Connected" accounts[0])
            const provider = await ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            }
            catch (error){
                console.log(error)
            }

            }
    }
        // const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        // const signer = provider.getSigner();
        // const address = await signer.getAddress();
        // state.address = address;
        // state.signer = signer;
        // state.status = true;
