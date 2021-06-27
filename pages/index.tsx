import {
  HomeLayout,
  Config,
  HomePageProps,
  TableUsers,
  UserContext,
} from "app";
import { useContext, useEffect } from "react";

export default function Home({ users }: HomePageProps) {
  const { addAllUsers } = useContext(UserContext);

  useEffect(() => {
    addAllUsers(users);
  }, []);

  return (
    <HomeLayout>
      <TableUsers />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(Config.api.routes.users);
  const users = await res.json();

  return {
    props: { users },
    revalidate: 1,
  };
}
