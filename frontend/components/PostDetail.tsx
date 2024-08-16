"use client";

type PostDetailProps = {
    post: {
      id: number;
      category: string;
      title: string;
      content: string;
      created_at: number;
      image: string;
    };
  };
  
  const PostDetail = ({ post }: PostDetailProps) => {
  
    return (
      <div className="m-8 flex flex-col justify-center">
        <img src={post.image} alt={post.title} className="h-auto min-w-48 rounded"/>
        <h1 className="font-semibold">{post.title}</h1>
        <p>{post.created_at}</p>
        <p>{post.content}</p>
       
      </div>
    );
  };
  
  export default PostDetail;


  