import { auth } from "../firebase";

const getUserToken = async () => {
  return new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        resolve(token);
      } else {
        resolve(null);
      }
      unsub();
    });
  });
};

export { getUserToken };
