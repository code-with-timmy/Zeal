<template>
  <div>
    <div class="bg-[#F9F9F9] flex flex-col gap-4 px-6 py-10 items-center">
      <h3 class="font-medium">Tell the world about yourself</h3>
      <p
        class="text-[0.77rem] w-[50%] [@media(max-width:900px)]:w-full text-center mx-auto"
      >
        Here’s where you can share more about yourself: your history, work
        experience, accomplishments, interests, dreams, and more. You can even
        add images and use rich text to personalize your bio.
      </p>
      <button
        class="text-[0.87rem] px-2 py-1 border-secondary border rounded-2xl"
      >
        Get started
      </button>
    </div>
    <div class="mt-5 border-t py-5 border-t-borderColor">
      <a href="#" class="text-[0.84rem] text-green-700"
        >{{ totalfollowings }} Following</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalfollowings() {
      const myProfile = this.$store.getters.getProfile?.following;
      if (myProfile) {
        const followingCount = Object.keys(myProfile).length;
        console.log(followingCount);
        return followingCount;
      } else {
        console.log(0);
        return 0;
      }
    },
  },
};
</script>

<style></style>
