import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
    },
    addCard: (state, action) => {
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    deleteList: (state, action) => {
      const itemIndex = state.list.findIndex(
        (item) => item.id === action.payload
      );
      state.list.splice(itemIndex,1)
      //   const filteredList = state.list.filter((list) => {
      //     return list.id !== action.payload;
      //   });
      //   state.list = filteredList;
    },
  },
});
export const { addList, addCard, deleteList } = listSlice.actions;
export default listSlice.reducer;
