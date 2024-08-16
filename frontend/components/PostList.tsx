
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { useSearchParams, useRouter } from 'next/navigation';
import { fetchProducts } from '@/api/api';
import { Post } from '@/types/post';
import Card from './Card';


const PostList: React.FC = () => {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPageData = async () => {
      const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;
      const limit = 10; // Number of products per page
      const data = await fetchProducts(page, limit);

      setPosts(data.results);
    };

    fetchPageData();
  }, [searchParams.get('page')]);

  return (
    <>        
      <section>
          <div className='grid grid-cols-4 gap-8 my-8 mx-12'>
                  {posts.map((post: any) =>(
                      <div key={post.id}>
                          <div>
                              <Link href={`/posts/${post.id}`}>
                                  <Card {...post}/>
                              </Link>                   
                          </div>
                      </div>                   
                  ))
                }                
          </div>
      </section>   
    </>
  );
};

export default PostList;
