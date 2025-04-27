<template>
  <the-header class=""></the-header>
  <the-navigation></the-navigation>
  <menu class="md:max-w-[84rem] h-screen w-full mx-auto">
    <section
      class="w-full h-full grid grid-cols-3 [@media(max-width:900px)]:grid-cols-1 gap-10 font-sogeo"
    >
      <div
        class="text-grey col-span-2 [@media(max-width:900px)]:col-span-1 flex flex-col gap-4 border-r-[1px] border-borderColor max-md:border-none"
      >
        <div
          class="flex gap-5 text-icon border-b-[1px] w-[75%] [@media(max-width:900px)]:w-[90%] mx-auto bg-white border-borderColor sticky top-0 z-10"
        >
          <button
            class="w-fit py-4 h-fit"
            :class="activeTabStyle1"
            @click="toggleTabs('users-post')"
          >
            <p class="text-[0.82rem]">For you</p>
          </button>
          <button
            class="w-fit py-4 h-fit"
            @click="toggleTabs('blogs-tab')"
            :class="activeTabStyle2"
          >
            <p class="text-[0.82rem]">Following</p>
          </button>
          <button
            class="w-fit py-4 h-fit"
            @click="toggleTabs('crypto-tab')"
            :class="activeTabStyle3"
          >
            <p class="text-[0.82rem]">Cryptocurrency</p>
          </button>
        </div>

        <div
          class="w-full flex justify-center overflow-hidden transition-all duration-500 ease-out"
          @click="refreshPage"
          :class="
            showBanner ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
          "
        >
          <button
            class="flex gap-1 items-center bg-white p-2 rounded-3xl shadow-lg mt-2"
          >
            <p class="text-[0.77rem]">new post added</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[15px] w-[15px]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                />
              </svg>
            </div>
          </button>
        </div>

        <!-- Content -->
        <div
          class="w-[75%] max-sm:w-full mx-auto [@media(max-width:900px)]:w-[90%]"
        >
          <keep-alive>
            <component :is="activeTab" class=""></component>
          </keep-alive>
        </div>
      </div>

      <!-- Right Side -->
      <div class="col-span-1">
        <follow-list class="sticky top-10"></follow-list>
      </div>
    </section>
  </menu>
</template>

<script>
import FollowList from "../FollowList.vue";
import BlogsTab from "../Tabs/BlogsTab.vue";
import UsersPost from "../UsersPost.vue";
import CryptoTab from "../Tabs/CryptoTab.vue";

export default {
  components: {
    FollowList,
    BlogsTab,
    UsersPost,
    CryptoTab,
  },
  data() {
    return {
      activeTab: "users-post",
    };
  },
  computed: {
    activeTabStyle1() {
      return this.activeTab == "users-post" ? "active" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "blogs-tab" ? "active" : null;
    },
    activeTabStyle3() {
      return this.activeTab == "crypto-tab" ? "active" : null;
    },

    showBanner() {
      return this.$store.state.showingRefreshButton;
    },
  },
  methods: {
    toggleTabs(tab) {
      this.activeTab = tab;
    },
    refreshPage() {
      this.$store.dispatch("setreFreshPageButton", false);
      setTimeout(() => {
        location.reload();
      }, 300);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBanner = true;
    }, 100);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.active {
  border-bottom: solid 1px;
  border-bottom-color: #242424;
  color: #242424;
}
</style>
