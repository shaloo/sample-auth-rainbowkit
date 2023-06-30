import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_test_87f34a9c7879cd4b726ba36a99e164837d70143a"
    );
  }
  return auth;
};
