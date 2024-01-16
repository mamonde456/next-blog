import { db } from "../../firebase";
import { set, ref, get, child, getDatabase } from "firebase/database";

interface followDataType {
  name: string;
  email: string;
  imageUrl: string;
  id: string;
}
export const setCurrentUserFollow = (
  uid: string,
  { name, email, imageUrl, id }: followDataType
) => {
  set(ref(db, `followUsers/${uid}/${id}`), {
    username: name,
    email: email,
    profile_img: imageUrl,
    id: id,
  });
};

export const getCurrentUserFollowing = async (
  userId: string,
  id?: string
): any => {
  const dbRef = ref(getDatabase());
  console.log(userId, id);
  const BASE_URL = `followUsers/`;
  const USER_ID = `${BASE_URL}${userId}`;
  const ID = `${BASE_URL}${userId}/${id}`;

  const snapshot = await get(child(dbRef, id ? ID : USER_ID));
  console.log(snapshot.exists());
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No data available");
    return [];
  }
};
