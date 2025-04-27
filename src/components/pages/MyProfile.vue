<template>
  <the-header class=""></the-header>
  <the-navigation></the-navigation>
  <menu class="md:max-w-[84rem] h-screen w-full mx-auto">
    <section class="w-[75%] [@media(max-width:900px)]:w-[90%] mx-auto mt-8">
      <div>
        <div>
          <div class="flex justify-between items-center">
            <div class="flex gap-4 items-center">
              <div class="flex items-center gap-1">
                <h1 class="text-[2.3rem] font-semibold">
                  {{ name }}
                </h1>
                <div v-if="name === 'Timmy'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[27px] h-[27px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#f00"
                      d="M22.02 11.164a1.84 1.84 0 0 0-.57-.67l-1.33-1a.35.35 0 0 1-.14-.2a.36.36 0 0 1 0-.25l.55-1.63a2 2 0 0 0 .06-.9a1.8 1.8 0 0 0-.36-.84a1.86 1.86 0 0 0-.7-.57a1.75 1.75 0 0 0-.85-.17h-1.5a.41.41 0 0 1-.39-.3l-.43-1.5a1.9 1.9 0 0 0-.46-.81a2 2 0 0 0-.78-.49a2 2 0 0 0-.92-.06a1.9 1.9 0 0 0-.83.39l-1.14.9a.35.35 0 0 1-.23.09a.36.36 0 0 1-.22-.05l-1.13-.9a1.85 1.85 0 0 0-.8-.38a1.9 1.9 0 0 0-.88 0a1.9 1.9 0 0 0-.78.43a2.1 2.1 0 0 0-.51.79l-.43 1.51a.38.38 0 0 1-.15.22a.4.4 0 0 1-.27.07H5.41a1.9 1.9 0 0 0-.89.18a1.8 1.8 0 0 0-.71.57a1.9 1.9 0 0 0-.36.83c-.05.293-.03.595.06.88L4 8.993a.41.41 0 0 1-.14.45l-1.33 1c-.242.18-.44.412-.58.68a1.93 1.93 0 0 0 0 1.71a2 2 0 0 0 .58.68l1.33 1a.41.41 0 0 1 .14.45l-.55 1.63a2 2 0 0 0-.07.91c.05.298.174.58.36.82c.183.25.428.45.71.58c.265.126.557.184.85.17h1.49a.38.38 0 0 1 .25.08a.34.34 0 0 1 .14.21l.43 1.51a2 2 0 0 0 .46.8a1.89 1.89 0 0 0 2.54.17l1.15-.91a.39.39 0 0 1 .49 0l1.13.9c.24.202.53.337.84.39q.17.015.34 0a1.9 1.9 0 0 0 .58-.09a1.87 1.87 0 0 0 1.24-1.28l.44-1.52a.34.34 0 0 1 .14-.21a.4.4 0 0 1 .27-.08h1.43a2 2 0 0 0 .89-.17a1.91 1.91 0 0 0 1.06-1.4a1.9 1.9 0 0 0-.07-.92l-.54-1.62a.36.36 0 0 1 0-.25a.35.35 0 0 1 .14-.2l1.33-1a1.9 1.9 0 0 0 .57-.68a1.8 1.8 0 0 0 .21-.86a1.9 1.9 0 0 0-.23-.78m-5.44-.76l-4.42 4.42a2 2 0 0 1-.59.4c-.222.09-.46.138-.7.14a1.7 1.7 0 0 1-.71-.15a1.9 1.9 0 0 1-.6-.4l-2.18-2.19a1 1 0 0 1 1.41-1.41l2.08 2.08l4.3-4.31a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.46z"
                      stroke-width="0.5"
                      stroke="#f00"
                    />
                  </svg>
                </div>
              </div>

              <div
                class="cursor-pointer py-2 px-3 text-primary rounded-3xl bg-green-600 text-[0.77rem]"
                v-if="showFollowButton"
                @click="follows"
              >
                {{ followingStatus }}
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex gap-5 text-icon border-b-[1px] mx-auto bg-white border-borderColor sticky top-0"
        >
          <button
            class="w-fit py-4 h-fit"
            :class="activeTabStyle1"
            @click="toggleTabs('user-home')"
          >
            <p class="text-[0.86rem]">Home</p>
          </button>
          <button
            class="w-fit py-4 h-fit"
            @click="toggleTabs('about-user')"
            :class="activeTabStyle2"
          >
            <p class="text-[0.86rem]">About</p>
          </button>
        </div>
      </div>
      <div class="mt-5">
        <keep-alive>
          <component :is="activeTab"></component>
        </keep-alive>
      </div></section
  ></menu>
</template>

<script>
import UserHome from "./UserHome.vue";
import AboutUser from "./AboutUser.vue";

export default {
  props: ["name"],
  components: {
    UserHome,
    AboutUser,
  },
  data() {
    return {
      activeTab: "user-home",
      followingStatus: "follow",
    };
  },

  async beforeMount() {
    const loggedUser = await this.$store.getters.getProfile;
    const selectedUser = await this.$store.getters.selecteduser;

    if (loggedUser === "" && selectedUser === "") {
      const getFollowing = loggedUser.following[selectedUser?.profile.uid];

      if (getFollowing) {
        this.followingStatus = "unfollow";
      } else {
        this.followingStatus = "follow";
      }
    }
  },

  computed: {
    loggedUser() {
      return this.$store.getters.getProfile;
    },
    user() {
      return this.$store.getters.selecteduser;
    },

    activeTabStyle1() {
      return this.activeTab == "user-home" ? "active" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "about-user" ? "active" : null;
    },

    showFollowButton() {
      console.log(this.$store.state.showFollowingButton);
      return this.$store.state.showFollowingButton;
    },
  },
  methods: {
    toggleTabs(tab) {
      this.activeTab = tab;
    },
    follows() {
      console.log(this.followingStatus);
      console.log(this.name);
      this.$store.dispatch("fetchProfile");
      const selectuseruid = this.user.profile.uid;
      const data = {
        frienduid: selectuseruid,
      };
      if (this.followingStatus === "follow") {
        this.followingStatus = "unfollow";
        return this.$store.dispatch("follows", data);
      }
      if (this.followingStatus === "unfollow") {
        this.followingStatus = "follow";
        return this.$store.dispatch("unfollow", data);
      }
    },
  },
};
</script>

<style scoped>
.active {
  border-bottom: solid 1px;
  border-bottom-color: #242424;
  color: #242424;
}
</style>
