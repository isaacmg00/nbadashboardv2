<template>
  <div class="register">
    <img class="logo" src="../assets/i.png" />
    <h1 classname="center">Dashboard Sign-Up</h1>
    <form>
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button class="flex items-center register" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  name: 'SignUp',
};

const router = useRouter();
function login() {
  router.push('/dashboard');
}
</script>
<style>
.center {
  margin: auto;
}
.logo {
  margin: auto;
  width: 370px;
}
.register input {
  width: 350px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin: auto;
  border: 2px solid greenyellow;
}
.register button {
  width: 350px;
  height: 50px;
  border: 2px solid greenyellow;
  background: limegreen;
  color: #fff;
  cursor: pointer;
  margin: auto;
}
</style>
