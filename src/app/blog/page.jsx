import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 


const blogPosts = [
  {
    id: 1,
    title: "Top 5 Productivity Apps You Need in 2024",
    slug: "top-5-productivity-apps",
    category: "Productivity",
    date: "July 25, 2024",
    author: "App Zone Team",
    excerpt: "Boost your efficiency and get more done with our hand-picked selection of the best productivity tools available now.",
  },
  {
    id: 2,
    title: "Mastering Mobile Gaming: Tips & Tricks",
    slug: "mastering-mobile-gaming",
    category: "Gaming",
    date: "July 20, 2024",
    author: "Gaming Guru",
    excerpt: "Level up your mobile gaming experience with these essential strategies and hidden gems from the App Zone.",
  },
  {
    id: 3,
    title: "Protecting Your Privacy: Essential App Settings",
    slug: "protecting-your-privacy",
    category: "Security",
    date: "July 18, 2024",
    author: "Security Expert",
    excerpt: "Learn how to secure your data and maintain your privacy with simple adjustments in your favorite apps.",
  },
  {
    id: 4,
    title: "New Update Alert: App Zone v2.0 is Here!",
    slug: "app-zone-v2-update",
    category: "Updates",
    date: "July 15, 2024",
    author: "App Zone Devs",
    excerpt: "Discover all the exciting new features and performance improvements in the latest version of App Zone.",
  },
  {
    id: 5,
    title: "Hidden Gems: Apps You Didn't Know You Needed",
    slug: "hidden-gems-apps",
    category: "Discovery",
    date: "July 12, 2024",
    author: "App Explorer",
    excerpt: "Uncover powerful and unique applications that can transform your daily digital life.",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0]; // Assuming the first post is the main feature
  const trendingPosts = blogPosts.slice(1, 4); // Example: show next 3 as trending
  const otherPosts = blogPosts.slice(4); // Remaining posts

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Our Latest <span className="text-blue-500">Stories</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Tips, updates, and deep dives into the apps that matter most.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="relative h-96 w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-xs font-bold uppercase text-blue-300 mb-2">{featuredPost.category}</span>
                  <h2 className="text-4xl font-bold mb-3 group-hover:text-blue-400 transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 max-w-lg">{featuredPost.excerpt}</p>
                  <span className="text-sm text-white/50 mt-4">
                    By {featuredPost.author} • {featuredPost.date}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Trending Posts */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4">Trending Now 🔥</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-blue-500/50 transition-all">
                <span className="text-xs font-bold uppercase text-blue-300 mb-2">{post.category}</span>
                <h4 className="text-xl font-bold leading-tight mt-2 group-hover:text-blue-400 transition">
                  {post.title}
                </h4>
                <p className="text-white/60 text-sm mt-3">{post.excerpt.substring(0, 100)}...</p>
                <span className="text-sm text-white/40 mt-4 block">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* All Other Posts */}
        <div>
          <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4">All Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-blue-500/50 transition-all">
                <span className="text-xs font-bold uppercase text-blue-300 mb-2">{post.category}</span>
                <h4 className="text-xl font-bold leading-tight mt-2 group-hover:text-blue-400 transition">
                  {post.title}
                </h4>
                <span className="text-sm text-white/40 mt-3 block">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}