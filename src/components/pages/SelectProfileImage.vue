<template>
  <section class="w-full h-screen flex flex-col justify-center">
    <div
      class="w-[50%] [@media(max-width:900px)]:w-[90%] mx-auto my-auto p-10 border border-secondary"
    >
      <h1
        class="text-[1.5rem] text-secondary text-center mb-10 font-bold font-euclid"
      >
        Select a anime profile avater of your choice
      </h1>
      <div class="grid grid-cols-4 [@media(max-width:700px)]:grid-cols-3 gap-6">
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          ref="img_1"
          :class="image_1"
          @click="toggleSelection('img_1')"
        >
          <img :src="img_1" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          :class="image_2"
          @click="toggleSelection('img_2')"
        >
          <img :src="img_2" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          :class="image_3"
          @click="toggleSelection('img_3')"
        >
          <img :src="img_3" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          :class="image_4"
          @click="toggleSelection('img_4')"
        >
          <img :src="img_4" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          :class="image_5"
          @click="toggleSelection('img_5')"
        >
          <img :src="img_3" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1 cursor-pointer"
          :class="image_6"
          @click="toggleSelection('img_6')"
        >
          <img :src="img_6" class="rounded-full" alt="" />
        </div>
        <div
          class="border-secondary h-[130px] w-[130px] [@media(max-width:700px)]:h-[90px] [@media(max-width:700px)]:w-[90px] rounded-full p-1"
          :class="image_7"
          @click="toggleSelection('img_7')"
        >
          <img :src="img_7" class="rounded-full" alt="" />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button
          class="font-bold flex gap-1 items-center justify-center rounded-3xl bg-green-500 text-primary px-4 py-2"
          @click="updateProfileImage"
        >
          <h1 class="text-[0.94rem]">Save</h1>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                stroke-width="0.5"
                stroke="#fff"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/firebase";

import { db } from "@/firebase";

import { ref, update } from "firebase/database";
export default {
  data() {
    return {
      selectedImg: "img_1",
      img_1: require("@/assets/avaters/img_1.jpg"),
      img_2: require("@/assets/avaters/img_2.jpg"),
      img_3: require("@/assets/avaters/img_3.jpg"),
      img_4: require("@/assets/avaters/img_4.jpg"),
      img_5: require("@/assets/avaters/img_5.jpg"),
      img_6: require("@/assets/avaters/img_6.jpg"),
      img_7: require("@/assets/avaters/img_7.jpg"),
    };
  },

  computed: {
    image_1() {
      return this.selectedImg === "img_1" ? "selected" : null;
    },
    image_2() {
      return this.selectedImg === "img_2" ? "selected" : null;
    },
    image_3() {
      return this.selectedImg === "img_3" ? "selected" : null;
    },
    image_4() {
      return this.selectedImg === "img_4" ? "selected" : null;
    },
    image_5() {
      return this.selectedImg === "img_5" ? "selected" : null;
    },
    image_6() {
      return this.selectedImg === "img_6" ? "selected" : null;
    },
    image_7() {
      return this.selectedImg === "img_7" ? "selected" : null;
    },
  },

  methods: {
    toggleSelection(img) {
      this.selectedImg = img;

      console.log(this.selectedImg);
    },

    async updateProfileImage() {
      try {
        const uid = auth.currentUser.uid;
        const userRef = ref(db, `users/${uid}/profile`);
        await update(userRef, { image: this.selectedImg });

        this.$router.replace("/blog");
      } catch (error) {
        console.error("Error updating nickname:", error);
      }
    },
  },
};
</script>

<style scoped>
.selected {
  border: solid 3px;
}
</style>
