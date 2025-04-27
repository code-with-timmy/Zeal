import { createStore } from "vuex";
import { db } from "@/firebase";
import { auth } from "@/firebase";

import { ref, push, get, update } from "firebase/database";

export default createStore({
  state() {
    return {
      postData: [
        {
          id: "1",
          user: {
            name: "Hokage",
            bio: "Open Source DevRel",
            img: require("@/assets/hokage-img.jpg"),
          },
          date: "Mar 4",
          heading: "How I Built My Portfolio",
          blogImage: "",
          context:
            "As you can see on the banner of this post. I made this portfolio toshowcase my experience and skills along with projects i built. Its url is https://yatharthverma.dev...",
          tag: "Portfolio",
          interaction: {
            up: 100,
            down: 18,
            upColor: "white",
            downColor: "white",
          },
        },
        {
          id: "2",
          user: {
            name: "Lolajo",
            bio: "CEO @lens",
            img: require("@/assets/lola-image.jpg"),
          },
          date: "Mar 3",
          heading:
            "The 10 Best New CSS Features in 2025 Already Supported in All Major Browsers",
          blogImage:
            "https://bloggingguide.com/wp-content/uploads/2021/12/6461.png",
          context:
            "Web performance refers to the speed, responsiveness, and overall efficiency of a website or web application. It encompasses various aspects, including page load times, rendering speed, network latency, and user interaction responsiveness. A fast and optimized website not only provides a better user experience but also contributes to higher search engine rankings and increased user engagement. Impr...",
          tag: "Web Performance",
          interaction: {
            up: 43,
            down: 5,
            upColor: "white",
            downColor: "white",
          },
        },
      ],
      user: null,
      userPost: [],
      allPost: [],
      userProfile: null,
      selectedUserProfile: null,
      selectedPost: null,
      showFollowingButton: false,
      showingRefreshButton: false,
    };
  },
  mutations: {
    setreFreshPageButton(state, data) {
      state.showingRefreshButton = data;
    },
    setUserPosts(state, data) {
      state.userPost = data;
    },
    setAllPosts(state, data) {
      state.allPost = data;
      console.log("allpost :", state.allPost);
    },
    addNewPost(state, post) {
      state.postData.push(post);
    },
    setUser(state, user) {
      state.user = user;
    },

    setProfile(state, data) {
      state.userProfile = data;
    },
    selectedProfile(state, data) {
      state.selectedUserProfile = data;
    },
    getSelectedPost(state, post) {
      state.selectedPost = post;
    },
    checkProfile(state, data) {
      state.showFollowingButton = data;
    },
  },
  actions: {
    setUser({ commit }, user) {
      console.log(user);
      commit("setUser", user);
    },

    setreFreshPageButton({ commit }, data) {
      commit("setreFreshPageButton", data);
    },
    addNewPost({ commit }, data) {
      const formatedData = {
        id: "6",
        user: {
          name: "Hokage",
          bio: "Open Source DevRel",
          img: null,
        },
        date: "Mar 4",
        heading: data.title,
        blogImage: "",
        context: data.description,
        tag: data.tag,
        interaction: {
          up: null,
          down: null,
          upColor: "white",
          downColor: "white",
        },
      };

      commit("addNewPost", formatedData);
    },
    async fetchUserPosts({ commit }) {
      try {
        if (!auth.currentUser) {
          console.error("User is not authenticated!");
          return; // Or redirect to login
        }

        const uid = auth.currentUser.uid;

        const postsRef = ref(db, `/users/${uid}/posts`);

        const snapshot = await get(postsRef);

        if (snapshot.exists()) {
          const posts = snapshot.val();

          commit("setUserPosts", posts);
        } else {
          console.log("No posts available");
          commit("setUserPosts", {});
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    },
    async fetchAllPosts({ commit }) {
      try {
        const allPostsRef = ref(db, "allPosts");
        const snapshot = await get(allPostsRef);

        if (snapshot.exists()) {
          const allPosts = snapshot.val();
          console.log("All Posts:", allPosts);
          commit("setAllPosts", allPosts);
        } else {
          console.log("No posts available in allPosts");
          return {}; // Return an empty object
        }
      } catch (error) {
        console.error("Error fetching all posts:", error);
        return {}; // Return an empty object
      }
    },

    async fetchProfile({ commit }) {
      try {
        const uid = auth.currentUser.uid;

        const profileRef = ref(db, `/users/${uid}/profile`);
        const snapshot = await get(profileRef);

        if (snapshot.exists()) {
          const profileData = snapshot.val();
          commit("setProfile", profileData);
        } else {
          console.log("Profile not found.");
          commit("setProfile", null);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        commit("setProfile", null);
      }
    },

    async createNewPost({ commit }, postData) {
      try {
        const { title, description, date, claps, comments } = postData;
        const uid = auth.currentUser.uid;

        const postKey = push(ref(db, "posts")).key;

        const profileRef = ref(db, `users/${uid}/profile`);
        const profileSnapshot = await get(profileRef);

        if (!profileSnapshot.exists()) {
          return;
        }

        const authorProfile = profileSnapshot.val();

        const postDataWithAuthor = {
          authorId: uid,
          authorProfile: authorProfile,
          title: title,
          description: description,
          date: date, // Assuming this is already toISOString() or getTime()
          claps: claps,
          comments: comments,
        };

        // Create the updates object for multi-location update
        const updates = {};
        updates[`/users/${uid}/posts/${postKey}`] = postDataWithAuthor;
        updates[`/allPosts/${postKey}`] = postDataWithAuthor;

        //Atomically write to both locations
        await update(ref(db), updates);

        commit("addNewPost", postData); // Optionally update the local state
      } catch (error) {
        console.error("Error creating new post:", error);
      }
    },

    getSelectedPost({ state, commit }, postId) {
      const post = state.allPost[postId] || null;

      commit("getSelectedPost", post);
    },

    async follows({ state }, data) {
      try {
        const uid = state.user.uid;
        const friendUid = data.frienduid;

        const followingRef = ref(db, `users/${uid}/profile/following`);

        await update(followingRef, { [friendUid]: true });
      } catch (error) {
        console.log(error.message);
      }
    },

    async unfollow({ state }, data) {
      try {
        const uid = state.user.uid;
        const friendUid = data.frienduid;

        const followingRef = ref(db, `users/${uid}/profile/following`);

        await update(followingRef, { [friendUid]: null });
      } catch (error) {
        console.error("Error unfollowing user:", error.message);
      }
    },
    async incrementClap({ state }, data) {
      try {
        console.log(data);
        console.log(state.userPost);
        const postRef = ref(db, `/users/${data.uid}/posts/${data.postKey}`);

        await update(postRef, {
          claps: data.value,
        });

        const allPost = ref(db, `/allPosts/${data.postKey}`);
        await update(allPost, {
          claps: data.value,
        });
      } catch (error) {
        console.log(error.message);
      }
    },

    async selectedProfile({ state, commit }, uid) {
      try {
        const profileRef = ref(db, `/users/${uid}`);
        const snapshot = await get(profileRef);

        if (state.user.uid !== uid) {
          commit("checkProfile", true);
        } else {
          commit("checkProfile", false);
        }

        if (snapshot.exists()) {
          const profileData = snapshot.val();
          console.log(profileData);
          commit("selectedProfile", profileData);
          localStorage.setItem(
            "selectedProfileData",
            JSON.stringify(profileData)
          );
        } else {
          console.log("Profile not found.");
          commit("selectedProfile", null);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        commit("selectedProfile", null);
      }
    },
  },
  getters: {
    allPost(state) {
      return state.postData;
    },
    user(state) {
      return state.user;
    },
    selecteduser(state) {
      return state.selectedUserProfile;
    },
    userPosts(state) {
      return state.userPost;
    },
    allPosts(state) {
      return state.allPost;
    },

    getProfile(state) {
      return state.userProfile;
    },
    getSelectedPost(state) {
      return state.selectedPost;
    },
  },
});
