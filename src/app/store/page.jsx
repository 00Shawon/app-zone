import AppCard from "../components/Card/AppCard";
import posts from '../../../public/appData.json'



export default async function Store() {

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="max-w-11/12 mx-auto px-6 py-10">
        <h1 className="mb-6 text-xl font-semibold">
          Download Apps Now! {posts.length}
        </h1>

        <div
          className=" w-full grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
          "
        >
          {posts.map((post) => (
            <AppCard key={post.id} app={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
