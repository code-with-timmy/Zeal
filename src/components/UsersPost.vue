<template>
  <section class="">
    <public-posts
      v-for="[id, data] in postData"
      :key="id"
      :id="id"
      :uid="data.authorId"
      :user="data.authorProfile?.fullname"
      :useravater="userAvater(data.authorProfile)"
      :heading="data.title"
      :context="data.description"
      :claps="data.claps"
      :comment="data.comments"
      :date="data.date"
      :profile="postData"
    ></public-posts>
  </section>
</template>

<script>
import PublicPosts from "./PublicPosts.vue";
export default {
  components: {
    PublicPosts,
  },
  data() {
    return {};
  },

  computed: {
    postData() {
      const postsObj = this.$store.getters.allPosts;

      const sortedPosts = Object.entries(postsObj).sort(
        (a, b) => b[1].date - a[1].date
      );

      return sortedPosts;
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
    incrementVote(id) {
      console.log("up");
      this.postData.find((el) => {
        if (el.id === id) {
          if (el.interaction.downColor === "#00ADB5") {
            el.interaction.upColor = "#00ADB5";
            el.interaction.downColor = "white";
            el.interaction.up += 1;
            el.interaction.down -= 1;
            console.log(this.postData);
          } else if (el.interaction.upColor === "white") {
            el.interaction.upColor = "#00ADB5";

            el.interaction.up += 1;
          } else if (el.interaction.upColor === "#00ADB5") {
            el.interaction.upColor = "white";

            el.interaction.up -= 1;
          }
        }
      });
    },
    decreaseVote(id) {
      console.log("up");
      this.postData.find((el) => {
        if (el.id === id) {
          if (el.interaction.upColor === "#00ADB5") {
            el.interaction.downColor = "#00ADB5";
            el.interaction.upColor = "white";
            el.interaction.down += 1;
            el.interaction.up -= 1;
          } else if (el.interaction.downColor === "white") {
            el.interaction.downColor = "#00ADB5";
            el.interaction.down += 1;
          } else if (el.interaction.downColor === "#00ADB5") {
            el.interaction.downColor = "white";

            el.interaction.down -= 1;
          }
        }
      });
    },
  },
};
</script>

<style></style>
