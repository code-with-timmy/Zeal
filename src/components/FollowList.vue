<template>
  <section
    class="w-[75%] max-sm:w-full mx-auto [@media(max-width:900px)]:w-[90%]"
  >
    <h1 class="font-bold">To Picks</h1>
    <latest-post
      v-for="[id, data] in postData"
      :key="id"
      :id="id"
      :uid="data.authorId"
      :user="data.authorProfile?.fullname"
      :useravater="userAvater(data.authorProfile)"
      :heading="data.title"
      :date="data.date"
      :profile="postData"
    ></latest-post>
  </section>
</template>

<script>
import LatestPost from "./LatestPost.vue";
export default {
  components: {
    LatestPost,
  },
  data() {
    return {};
  },

  computed: {
    postData() {
      const postsObj = this.$store.getters.allPosts;

      const top4Posts = Object.entries(postsObj)
        .sort((a, b) => b[1].date - a[1].date)
        .slice(0, 4);

      return top4Posts;
    },
  },
  methods: {
    userAvater(prof) {
      if (!prof || !prof.image) {
        // Fallback image
        return require("@/assets/avaters/default.jpg");
      }

      return require(`@/assets/avaters/${prof.image}.jpg`);
    },
  },
};
</script>

<style></style>
