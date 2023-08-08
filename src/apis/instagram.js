const userId = Object.fromEntries(
  document.cookie.split(";").map(cookie => cookie.split("="))
).ds_user_id;

const Fetch = async url => {
  return await fetch(url, {
    headers: {
      "x-ig-app-id": "936619743392459",
    },
  }).then(res => res.json());
};

export const getFollowings = async () => {
  let allData = [];
  let maxId = 0;

  while (maxId !== undefined) {
    const { next_max_id, users } = await Fetch(
      `https://www.instagram.com/api/v1/friendships/${userId}/following/?count=200&max_id=${maxId}`
    );
    allData = [...allData, ...users];
    maxId = next_max_id;
  }

  return allData;
};

export const getFollowers = async () => {
  let allData = [];
  let maxId = null;

  while (maxId !== undefined) {
    const { next_max_id, users } = await Fetch(
      `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=200${
        maxId ? `&max_id=${maxId}` : ""
      }`
    );
    allData = [...allData, ...users];
    maxId = next_max_id;
  }

  return allData;
};
