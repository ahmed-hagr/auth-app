import React from 'react';

const PostsComponent = ({ data }) => {
  return (
    <div className="container mx-auto px-4 mt-5 pt-5">
      <h1 className="text-3xl font-bold-700  text-gray-800 my-6 pt-5 text-center">My Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div className="p-4 border rounded shadow h-210px overflowY-auto" key={item.id} >
            <h5 className="text-xl text-gray-700">{item.name}</h5>
            <p className="text-gray-600">{item.email}</p>
            <p className="text-base text-gray-500">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsComponent;
