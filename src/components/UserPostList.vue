<template>
  <div class="flex flex-col gap-3 pb-2 pt-4 border-b border-borderColor">
    <div class="flex gap-2 items-center cursor-pointer">
      <img
        class="h-[24px] w-[24px] rounded-full"
        :src="userAvater"
        alt="profile-image"
      />
      <h2
        class="text-secondary text-[0.75rem] hover:underline hover:underline-offset-1"
      >
        {{ userProfile?.profile.fullname || "_______" }}
      </h2>
      <div v-if="userProfile?.profile.fullname === 'Timmy'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-[14px] h-[14px]"
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
      class="grid grid-cols-3 gap-3 w-full"
      :class="{ 'grid-cols-1': !blogImg }"
    >
      <div class="col-span-3" :class="{ 'col-span-2': blogImg }">
        <div>
          <h1
            class="font-bold text-[1.3rem] [word-spacing:0px] font-euclid leading-none"
          >
            {{ heading }}
          </h1>
        </div>
        <div>
          <p class="text-[1rem] mt-3 text-icon line-clamp-2">
            {{ context }}
          </p>
        </div>
        <div class="flex justify-between font-euclid mt-3 py-4 text-icon">
          <div class="flex gap-3 items-center">
            <p class="text-[0.78rem]">{{ formattedDate }}</p>
            <div class="flex items-center gap-3">
              <div class="flex gap-1 items-center text-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[16px] w-[16px] fill-current stroke-current"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M164.22 24V8a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m34 13.55a4 4 0 0 0 5.51-1.33l8-13.11a4 4 0 0 0-6.84-4.17l-8 13.11a4 4 0 0 0 1.3 5.5Zm41.62 17.23a4 4 0 0 0-5.05-2.58l-15.09 4.85a4 4 0 0 0 1.23 7.8a4 4 0 0 0 1.23-.19l15.06-4.85a4 4 0 0 0 2.59-5.03ZM203 189.66c-.37 2-.81 4-1.34 6A76.18 76.18 0 0 1 62.22 214L27 153a22 22 0 0 1 22.76-32.69L43.19 109a22 22 0 0 1 22.73-32.68L61.69 69a22 22 0 0 1 35.18-26a21.83 21.83 0 0 1 9.85-12a22.08 22.08 0 0 1 30.1 8l15.79 27.3a22.05 22.05 0 0 1 39.73-3.3l21.14 36.57A76.19 76.19 0 0 1 203 189.66M161.08 81l33 57.05a75.5 75.5 0 0 1 10.21 37.24a68.26 68.26 0 0 0 2.27-71.66L185.4 67a14 14 0 0 0-24.32 14m-55.49-24l28.54 49.29a22 22 0 0 1 24.28-14L129.88 43a14 14 0 1 0-24.29 14m-37 8l10 17.27a22 22 0 0 1 24.27-14L92.91 51a14 14 0 1 0-24.28 14Zm118.5 77l-20.19-35a14 14 0 0 0-24.67 13.26l12.6 21.74a4 4 0 1 1-6.93 4l-36.51-63a14 14 0 0 0-19.15-5.11A14 14 0 0 0 87.09 97l26.05 45a4 4 0 0 1-1.46 5.47a4 4 0 0 1-5.48-1.46L74.42 91a14 14 0 0 0-24.28 14l35.23 61a4 4 0 0 1-6.94 4l-20.25-35a14 14 0 0 0-24.29 14l35.27 61a68.09 68.09 0 0 0 118-68Z"
                    stroke-width="6.5"
                  />
                </svg>
                <p class="text-[0.76rem]">{{ claps }}</p>
              </div>
              <div class="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[16px] w-[16px] fill-current stroke-current"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M496 496h-16a273.4 273.4 0 0 1-179.025-66.782l-16.827-14.584A291 291 0 0 1 256 416c-63.527 0-123.385-20.431-168.548-57.529C41.375 320.623 16 270.025 16 216S41.375 111.377 87.452 73.529C132.615 36.431 192.473 16 256 16s123.385 20.431 168.548 57.529C470.625 111.377 496 161.975 496 216a171.16 171.16 0 0 1-21.077 82.151a201.5 201.5 0 0 1-47.065 57.537a285.2 285.2 0 0 0 63.455 97l4.687 4.685ZM294.456 381.222l27.477 23.814a241.4 241.4 0 0 0 135 57.86a317.5 317.5 0 0 1-62.617-105.583l-4.395-12.463l9.209-7.068C440.963 305.678 464 262.429 464 216c0-92.636-93.309-168-208-168S48 123.364 48 216s93.309 168 208 168a259 259 0 0 0 31.4-1.913Z"
                    stroke-width="1"
                  />
                </svg>
                <p class="text-[0.76rem]">{{ comment }}</p>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-[24px] w-[24px] fill-current"
            >
              <path
                d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-span-1" v-if="blogImg">
        <img
          class="h-[7rem] w-[70%] max-sm:w-[90%] max-sm:h-[4rem] mx-auto"
          :src="blogImg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "date",
    "bio",
    "heading",
    "context",
    "claps",
    "comment",
    "tag",
    "profileimg_url",
    "upColor",
    "downColor",
    "blogImg",
  ],
  beforeMount() {
    this.$store.dispatch("fetchProfile");
  },
  computed: {
    formattedDate() {
      const formattedDate = new Date(this.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      return formattedDate;
    },
    userProfile() {
      const userProfile = localStorage.getItem("selectedProfileData");
      if (userProfile) {
        const user = JSON.parse(userProfile);

        return user;
      } else {
        return null;
      }
    },
    userAvater() {
      const prof = this.userProfile.profile;
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
