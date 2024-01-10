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

export const getCurrentUserFollowing = (userId: string, id?: string): any => {
  let data = [];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `followUsers/${userId}/${id}`)).then((snapshot) => {
    console.log(snapshot.exists());
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return (data = snapshot.val());
    } else {
      console.log("No data available");
      return (data = []);
    }
  });
  return data;
};
