import AppCard from "../components/Card/AppCard";


export default async function Store() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/appData.json`
  );
  const posts = await data.json();

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
