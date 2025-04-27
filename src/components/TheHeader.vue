<template>
  <div
    class="w-full m-0 px-5 py-2 flex justify-between justify-items-center items-center border-b-[1px] border-borderColor"
  >
    <div>
      <h1 class="font-bold text-4xl text-green-600">Zeal</h1>
    </div>

    <div class="flex gap-8 items-center">
      <div>
        <router-link to="/blog/create-post">
          <button
            class="flex items-center gap-2 text-icon hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Write"
            >
              <path
                fill="currentColor"
                d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
              ></path>
              <path
                stroke="currentColor"
                d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
              ></path>
            </svg>
            <p class="text-[0.85rem]">Write</p>
          </button>
        </router-link>
      </div>
      <div v-if="user && user.displayName">
        <router-link
          :to="{
            name: 'UserProfile',
            params: { name: user.displayName },
          }"
          @click="selectedProfile(user.uid)"
        >
          <img
            :src="userAvater"
            class="w-[30px] h-[30px] rounded-full"
            alt=""
          />
        </router-link>
      </div>

      <div v-else>
        <!-- You can show a loader, placeholder avatar, or nothing -->
        <img
          src="@/assets/avaters/default.jpg"
          class="w-[30px] h-[30px] rounded-full"
          alt="default avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchUserPosts");
    this.$store.dispatch("fetchProfile");
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
    selectedProfile(uid) {
      this.$store.dispatch("selectedProfile", uid);
    },
  },
};
</script>

<style></style>
