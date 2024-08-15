'use client';

import { posts, posts_2 } from '@/_db/data';
import Link from 'next/link';
import Pack from './Pack';


const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-96">
          <img
            src="/img/hero.jpg"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Welcome to Django Nextjs Blog</h1>
          </div>
        </div>
      </div>


      <section className='mb-8'>
        <h2 className='text-2xl text-gray-700 font-bold mb-4'>Latest Posts</h2>
        <div className='grid md:grid-cols-8'>
            <div className='md:col-span-6 mr-4'>                
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Link href={`/posts/${post.id}`}>
                        <Pack {...post}/>
                      </Link> 
                    </div>
                  ))}
                  {posts_2.map((post) => (
                      <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Link href={`/posts/${post.id}`}>
                          <Pack {...post}/>
                        </Link>
                      </div>
                  ))}
              </div>
            </div>
            <div className='md:col-span-2'>
                <p className='font-bold text-xl text-center text-green-700'>More Posts</p>
                <div className="flex flex-col">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-2">
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-green-500">{post.title}</h3>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                        </div>
                    ))}
                        {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-2">
                          <div className="p-4">
                              <h3 className="text-xl font-bold mb-2 text-purple-500">{post.title}</h3>
                              <p className="text-gray-700">{post.content}</p>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Medium Card Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-yellow-500 font-bold mb-4">Popular Posts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.slice(0, 2).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={`/posts/${post.id}`}>
                <Pack {...post}/>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Posts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Card Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/img/p1.jpg" alt="Featured Post" className="h-64 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Featured Post Title</h3>
            <p className="text-gray-700">This is an content for the featured post.</p>
          </div>
        </div>
      </section>


        {/* Edited Posts */}
        <section className="mb-8">
        <h2 className="text-2xl text-blue-500 font-bold mb-4">Recent Posts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0,2).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
            <div className="bg-white rounded-lg overflow-hidden border-t-2">
                <div className="flex flex-col">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-3">
                            {/* <img src={post.image} alt={post.title} className="h-48 w-full object-cover" /> */}
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                <p className="text-gray-700">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>


      {/* Small Card Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Live Posts</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="h-32 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
