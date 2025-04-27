<template>
  <div class="flex flex-col gap-2 pb-2 pt-4 border-b border-borderColor w-full">
    <router-link
      :to="{
        name: 'UserProfile',
        params: { name: user },
      }"
      @click="selectedProfile(uid)"
    >
      <div class="flex gap-2 items-center cursor-pointer">
        <img
          class="h-[24px] w-[24px] rounded-full"
          :src="useravater"
          alt="profile-image"
        />
        <h2
          class="text-secondary text-[0.75rem] hover:underline hover:underline-offset-1"
        >
          {{ user }}
        </h2>
      </div></router-link
    >

    <div class="grid grid-cols-3 w-full" :class="{ 'grid-cols-1': !blogImg }">
      <div class="col-span-3" :class="{ 'col-span-2': blogImg }">
        <router-link
          :to="{ name: 'ExpandPost', params: { name: user, postId: id } }"
          @click="selectedPost(id)"
        >
          <div>
            <h1
              class="font-bold text-[1.3rem] [word-spacing:0px] font-euclid leading-[1.5rem]"
            >
              {{ heading }}
            </h1>
          </div>
        </router-link>
        <div class="flex justify-between font-euclid py-2 text-icon">
          <div class="flex items-center">
            <p class="text-[0.78rem]">{{ formattedDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["uid", "id", "name", "date", "heading", "user", "useravater"],

  methods: {
    selectedPost(id) {
      this.$store.dispatch("getSelectedPost", id);
    },
    selectedProfile(uid) {
      console.log(uid);
      this.$store.dispatch("selectedProfile", uid);
    },
  },
  computed: {
    formattedDate() {
      const formattedDate = new Date(this.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      return formattedDate;
    },
  },
};
</script>

<style></style>
