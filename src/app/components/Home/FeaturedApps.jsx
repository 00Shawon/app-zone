import React from 'react';
import AppCard from '../Card/AppCard';

export default async function FeaturedApps () {

    const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/appData.json`
  );

  const posts = await data.json()
  const homePosts= posts.slice(0,15)
    return (
        <div className="bg-zinc-50 dark:bg-black">
          <div className="max-w-11/12 mx-auto px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Featured Apps
            </h1>
            <p className="text-white/50">Hand-picked premium solutions for your next project.</p>
    
            <div
              className=" w-full grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
              "
            >
              {homePosts.map((post) => (
                <AppCard key={post.id} app={post} />
              ))}
            </div>
          </div>
        </div>
      );
};
