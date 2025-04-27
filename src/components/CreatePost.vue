<template>
  <form
    class="w-[70%] [@media(max-width:900px)]:w-full mx-auto"
    @submit.prevent="upLoad"
  >
    <header class="flex justify-between p-4 items-center">
      <div>
        <h1 class="font-bold text-4xl">Zeal</h1>
      </div>
      <div class="flex gap-6">
        <button
          class="text-[0.77rem] font-bold text-primary px-3 rounded-[0.6rem] py-1 bg-green-500"
          type="submit"
        >
          Publish
        </button>
        <div>
          <router-link
            :to="{ name: 'UserProfile', params: { name: user.displayName } }"
            ><img
              :src="userAvater"
              class="w-[30px] h-[30px] rounded-full"
              alt=""
          /></router-link>
        </div>
      </div>
    </header>
    <div
      class="flex flex-col w-[68%] [@media(max-width:900px)]:w-full mx-auto py-6 gap-3 h-screen text-secondary px-3"
    >
      <div class="flex flex-col gap-3">
        <p>
          <span
            class="textarea px-3 pb-2 pt-7 text-[2.3rem] outline-none border-none"
            ref="title"
            role="textbox"
            contenteditable
          ></span>
        </p>
      </div>
      <div>
        <p>
          <span
            class="textarea text2 px-3 pb-2 pt-7 text-[2.3rem] leading-[2rem] outline-none border-none"
            ref="description"
            role="textbox"
            contenteditable
          ></span>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userAvater() {
      const prof = this.$store.getters.getProfile;
      if (!prof || !prof.image) {
        // Fallback image
        return require("@/assets/avaters/default.jpg");
      }

      return require(`@/assets/avaters/${prof.image}.jpg`);
    },
  },

  methods: {
    setCursorActiver() {
      const el = this.$refs.description;
      el.focus();
    },
    upLoad() {
      const title = this.$refs.title.innerText;

      const description = this.$refs.description.innerText;
      if (title.length === 0) return;
      const uid = auth.currentUser ? auth.currentUser.uid : null;
      const now = new Date();
      if (uid) {
        console.log(title);
        this.$store.dispatch("createNewPost", {
          title: title,
          description: description,
          date: now.getTime(),
          claps: 0,
          comments: 0,
        });
        this.$store.dispatch("fetchAllPosts");
        this.$store.dispatch("setreFreshPageButton", true);
        this.$router.replace("/blog");
      } else {
        console.error("User not authenticated.");
      }
    },
  },
};
</script>

<style scoped>
.input,
.textarea {
  font-family: inherit;
}

.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: none;
  line-height: 30px;
}

.textarea[contenteditable]:empty::before {
  content: "Title";
  color: rgb(230, 229, 229);
  font-weight: bold;
  font-size: 2.3rem;
}
.text2[contenteditable]:empty::before {
  content: "Tell your story";
  color: rgb(230, 229, 229);
  font-weight: 400;
  font-size: 1.9rem;
}
</style>
