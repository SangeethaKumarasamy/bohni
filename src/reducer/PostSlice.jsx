import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/getPosts", async () => {
  const response = await fetch(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&page=1&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM"
  );
  const data = await response.json();
  console.log(data);
  return data.items;
});
export const SearchPosts = createAsyncThunk(
  "post/searchPost",
  async (query) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM`
    );
    const data = await response.json();
    console.log(data);
    return data.items;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: true,
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    searchPost: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = true;
      })
      .addCase(SearchPosts.pending, (state) => {
        state.status = false;
      })
      .addCase(SearchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = true;
      });
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;