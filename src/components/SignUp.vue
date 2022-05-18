<template>
  <div class="register">
    <img class="logo" src="../assets/i.png" />
    <h1 style="text-align: center; margin-bottom: 20px">Dashboard Sign-Up</h1>
    <form>
      <input
        style="margin-bottom: 20px"
        class="p-6 my-10"
        type="text"
        placeholder="Enter Name"
      />
      <input
        style="margin-bottom: 20px"
        class="p-6"
        type="text"
        placeholder="Enter Email"
      />
      <input
        style="margin-bottom: 20px"
        class="p-6"
        type="password"
        placeholder="Enter Password"
      />
      <button
        style="margin-bottom: 20px; text-align: center"
        class="flex items-center register"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      image: { backgroundImage: '../assets/signup.jpeg' },
    };
  },
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
  margin: auto;

  border: 2px solid greenyellow;
}
.register button {
  text-align: center;
  width: 350px;
  height: 50px;
  border: 2px solid greenyellow;
  background: limegreen;
  color: #fff;
  cursor: pointer;
  margin: auto;
}
</style>
