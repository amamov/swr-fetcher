export const API_ROOT = "https://jsonplaceholder.typicode.com";

type Urls = {
  index: string;
  users: {
    index: string;
  };
  posts: {
    index: string;
    comments: string;
  };
  comments: {
    index: string;
  };
  albums: {
    index: string;
  };
  photos: {
    index: string;
  };
  todos: {
    index: string;
  };
};

export const dummyApiUrl = (param: string | number = ""): Urls => ({
  index: API_ROOT,
  users: {
    index: `${API_ROOT}/users/${param}`,
  },
  posts: {
    index: `${API_ROOT}/posts/${param}`,
    comments: `${API_ROOT}/posts/${param}/comments`,
  },
  comments: {
    index: `${API_ROOT}/comments/${param}`,
  },
  albums: {
    index: `${API_ROOT}/albums/${param}`,
  },
  photos: {
    index: `${API_ROOT}/photos/${param}`,
  },
  todos: {
    index: `${API_ROOT}/todos/${param}`,
  },
});

export type DummyUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type DummyPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type DummyComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type DummyAlbums = {
  userId: number;
  id: number;
  title: string;
};

export type DummyPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type DummyTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
