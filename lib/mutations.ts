import fetcher from "./fetcher";

export const auth = (
  mode: "signup" | "signin",
  body: { email: string; password: string }
) => {
  // @ts-ignore
  return fetcher(`/${mode}`, body);
};
