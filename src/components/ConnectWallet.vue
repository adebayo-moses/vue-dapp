<script setup>
import connect from '../composables/index'

export default {
  name: 'ConnectWallet',
  setup: () => {
    const {connectMetamsk, state} = connect();
console.log(state)
    const connectMetamask = async () => {
    await connectMetamsk();
  };

  return {
    connectMetamask,
    state
  }
}
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1>
      Welcome to my Dapp
      </h1>

      <h4>Connect Wallet</h4>
    <h3> Our Address</h3>
    <h3>Not Connected</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  padding: 2%;
}


h4 {
  font-size: 1.2rem;
  padding: 2%;
  text-align: center;
  color: rgb(91, 214, 91);
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
