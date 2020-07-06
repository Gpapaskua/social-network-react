import { rerenderEntireTree } from "../render";
let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "hi How are u?",
        likesCount: 20
      },
      {
        id: 2,
        message: "what's up?",
        likesCount: 3
      },
      {
        id: 3,
        message: "boooooooo",
        likesCount: 20
      },
      {
        id: 4,
        message: "just a post",
        likesCount: 4
      }
    ]
  },

  messagesPage: {
    messages: [
      {
        id: 1,
        message: "Hi"
      },
      {
        id: 2,
        message: "hows your day?"
      },
      {
        id: 3,
        message: "Yoo"
      }
    ],

    dialogsData: [
      {
        id: "1",
        name: "John"
      },
      {
        id: "2",
        name: "Jane"
      },
      {
        id: "3",
        name: "Nick"
      },
      {
        id: "4",
        name: "Kyle"
      }
    ]
  }
};

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
