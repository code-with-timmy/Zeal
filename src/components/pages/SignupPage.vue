<template>
  <section
    class="h-screen flex flex-col gap-8 items-center justify-center font-euclid"
  >
    <div>
      <h1 class="text-[2.1rem] font-euclid font-semibold">Welcome to Zeal</h1>
    </div>
    <form class="flex flex-col gap-6 w-[20rem]" @submit.prevent="signUp">
      <div class="flex flex-col text-secondary gap-1">
        <label for="email" class="text-[0.86rem] font-bold">Fullname</label>
        <input
          v-model="fullname"
          type="text"
          name="fullname"
          id="fullname"
          class="bg-primary rounded-md h-12 text-secondary p-3 outline-none border border-dark active:border-secondary focus:border-secondary"
          required
        />
      </div>
      <div class="flex flex-col text-secondary gap-1">
        <label for="email" class="text-[0.86rem] font-bold">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          required
          class="bg-primary rounded-md h-12 text-secondary p-3 outline-none border border-dark active:border-secondary focus:border-secondary"
        />
      </div>
      <div class="flex flex-col text-secondary gap-1">
        <label for="password" class="text-[0.86rem] font-bold">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          required
          id="password"
          class="bg-primary h-12 rounded-md text-secondary p-3 outline-none border border-dark active:border-secondary focus:border-secondary"
        />
      </div>
      <p v-if="errorMsg" class="text-[0.8rem] text-red-600">{{ errorMsg }}</p>

      <div>
        <button
          type="submit"
          class="text-white items-center flex justify-center rounded-3xl text-[0.7rem] font-bold bg-secondary w-full py-4"
          :class="{ 'bg-gray': showLoader }"
        >
          <h1 v-if="!showLoader">SIGN-UP</h1>
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
      <div class="flex text-secondary items-enter justify-center">
        <router-link to="/account/login"
          ><div>
            <p class="text-[0.77rem]">
              Already have an account?
              <span class="font-bold">Signin instead :)</span>
            </p>
          </div></router-link
        >
      </div>
    </form>
  </section>
</template>

<script>
import { auth, updateUserProfile } from "@/firebase";

import { db } from "@/firebase";
import { createUser } from "@/firebase";
import { ref, set } from "firebase/database";
export default {
  data() {
    return {
      fullname: null,
      email: null,
      password: null,
      showLoader: false,
      errorMsg: null,
    };
  },
  methods: {
    async signUp() {
      try {
        this.showLoader = true;
        const userCredentials = await createUser(
          auth,
          this.email,
          this.password
        );

        const user = userCredentials.user;
        const uid = user.uid;

        // Write initial user data to Realtime Database
        await this.writeNewUser(uid, this.email, this.fullname);

        // Update user profile (after writing initial data)
        await updateUserProfile(auth.currentUser, {
          displayName: this.fullname,
        });

        this.$router.replace("/avater");
        this.showLoader = false;
      } catch (error) {
        this.showLoader = false;
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          this.errorMsg = "Email already in use";
        } else {
          console.log(errorCode);
        }
      }
    },

    async writeNewUser(uid, email, fullname) {
      console.log("Writing user data:", { uid, email, fullname });
      try {
        await set(ref(db, `users/${uid}/profile`), {
          email: email,
          fullname: fullname,
          image: null,
          uid: uid,
          following: null,
          followers: [],
        });
        console.log("User data written successfully!");
      } catch (error) {
        console.error("Error writing user data:", error);
      }
    },
  },
};
</script>

<style></style>
