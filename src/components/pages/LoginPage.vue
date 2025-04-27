<template>
  <section
    class="h-screen flex flex-col gap-8 items-center pt-[10rem] text-secondary"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[90px] w-[90px]"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" fill="none" />
        <circle cx="12" cy="6" r="4" fill="#194a57" />
        <path
          fill="#194a57"
          d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
        />
      </svg>
    </div>
    <form class="flex flex-col gap-8 w-[20rem]" @submit.prevent="signIn">
      <div class="flex flex-col gap-3">
        <label for="email" class="text-[0.86rem] font-bold">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="bg-primary rounded-md h-12 text-secondary p-3 outline-none border border-dark active:border-secondary focus:border-secondary"
        />
      </div>
      <div class="flex flex-col gap-3">
        <label for="password" class="text-[0.86rem] font-bold">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="bg-primary rounded-md h-12 text-secondary p-3 outline-none border border-dark active:border-secondary focus:border-secondary"
        />
      </div>
      <p v-if="errorMsg" class="text-[0.8rem] text-red-600">{{ errorMsg }}</p>

      <div class="flex justify-between">
        <div class="flex gap-2">
          <input type="checkbox" name="remember me" id="" /><label
            for="Remember me"
            class="text-[0.82rem]"
            >Remember me</label
          >
        </div>
        <div>
          <p class="text-[0.82rem]">Forgotten Password?</p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="text-white items-center flex justify-center rounded-3xl text-[0.7rem] font-bold bg-secondary w-full py-4"
          :class="{ 'bg-gray': showLoader }"
        >
          <h1 v-if="!showLoader">SIGN-IN</h1>
          <div v-if="showLoader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#bababa"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity="0.25"
                stroke-width="0.5"
                stroke="#bababa"
              />
              <path
                fill="#bababa"
                d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                stroke-width="0.5"
                stroke="#bababa"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          </div>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { auth } from "@/firebase";
import { signInUser } from "@/firebase";
export default {
  data() {
    return {
      email: null,
      password: null,
      showLoader: false,
      errorMsg: null,
    };
  },
  methods: {
    async signIn() {
      try {
        this.showLoader = true;
        await signInUser(auth, this.email, this.password);
        this.$router.replace("/blog");
        this.showLoader = false;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/argument-error") {
          this.errorMsg = "missing email/password";
          console.error("Argument error:", errorMessage);
        } else if (errorCode === "auth/wrong-password") {
          this.errorMsg = "invalid password";
          console.error("Wrong password:", errorMessage);
        } else if (errorCode === "auth/user-not-found") {
          this.errorMsg = "user not found";
          console.error("User not found:", errorMessage);
        } else if (errorCode === "auth/invalid-email") {
          this.errorMsg = "try again later";
          console.error("Invalid email:", errorMessage);
        } else {
          console.error("Unknown error:", errorMessage);
        }
      }
    },
  },
};
</script>

<style></style>
