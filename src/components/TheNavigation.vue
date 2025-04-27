<template>
  <div
    class="w-fit m-0 px-4 py-3 z-50 fixed bottom-7 left-[50%] translate-x-[-50%] mx-auto bg-dark rounded-3xl bg-green-600"
  >
    <nav class="flex justify-center items-center gap-10">
      <router-link to="/">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[25px] h-[25px] text-white"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.1"
              d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
            />
          </svg>
        </button>
      </router-link>
      <router-link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[25px] h-[22px] text-white"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
            />
          </svg></button
      ></router-link>
      <router-link
        ><button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[25px] h-[25px] text-white"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z"
            />
          </svg></button
      ></router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navv {
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%);
}
</style>
