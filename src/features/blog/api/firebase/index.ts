import { firestore } from "../../../../../firebase";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

export const upsertDataFromFirestore = async (id: string, src: string) => {
  const docRef = doc(firestore, src, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    await updateDoc(docRef, { views: data.views + 1 });
    return { views: data.views + 1 };
  } else {
    await setDoc(doc(firestore, "properties", id), {
      views: 1,
      like: 0,
      comments: [],
    });
    return { views: 1 };
  }
};

export const subscribeToData = async (id: string, src: string) => {
  try {
    let snapshot;
    const docRef = doc(firestore, src, id);
    const unsub = onSnapshot(docRef, (doc) => {
      const data = doc.data();
      if (data) {
        snapshot = data;
      }
    });
    return { unsub, data: snapshot };
  } catch (error) {
    console.error(error);
    throw new Error(`subscribeToData: [${src}/${id}] error 발생`);
  }
};
