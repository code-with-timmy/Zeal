<template>
  <section v-if="posts">
    <user-post-list
      v-for="(post, id) in posts"
      :key="id"
      :id="id"
      :heading="post.title"
      :context="post.description"
      :claps="post.claps"
      :comment="post.comments"
      :date="post.date"
    ></user-post-list>
  </section>
  <section v-else>
    <div class="w-full text-center text-[0.8rem] text-slate-400">
      No Post Available
    </div>
  </section>
</template>

<script>
import UserPostList from "../UserPostList.vue";
export default {
  components: {
    UserPostList,
  },

  computed: {
    posts() {
      const userProfile = localStorage.getItem("selectedProfileData");
      if (userProfile) {
        const user = JSON.parse(userProfile);

        return user.posts;
      } else {
        return null;
      }
    },
  },
};
</script>

<style></style>
