const url = process.env["NEXT_PUBLIC_APIURL"];

export const Config = {
  api: {
    host: url,
    routes: {
      users: url + "/users",
    },
  },
};
