"use client";

import { useEffect, useState } from 'react';


import { fetchProductById } from '@/api/api';
import PostDetail from '@/components/PostDetail';

const PostPage = ({ params }) => {
  const id  = params.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const loadPost = async () => {
        try {
          const fetchedProduct = await fetchProductById(id as string);
          setPost(fetchedProduct);
        } catch (error) {
          console.error('Error fetching product:', error);
          setPost(null);
        } finally {
          setLoading(false);
        }
      };

      loadPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...{params.id}</div>;
  }

  if (!post) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <main>
        <PostDetail post={post} />
      </main>
    </>
  );
};

export default PostPage;
