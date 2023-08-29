import { WithApollo } from "@/app/components/WthApollo";
import { User } from "@/app/components/User";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl">Todo</h1>
      <WithApollo>
        <User />
      </WithApollo>
    </main>
  );
};

export default Home;
