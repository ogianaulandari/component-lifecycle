import { useState, useEffect } from 'react';
import { fetchPosts, addPost } from '../api/api';

const Child = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddNewPost = () => {
    const newPost = {
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    addPost(newPost)
      .then(response => setData([...data, response.data]))
      .catch(error => console.log(error));
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post Management</h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        onClick={handleAddNewPost}
      >
        Add New Data
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Posts</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <pre className="whitespace-pre-wrap break-words text-sm text-gray-800">
            {JSON.stringify(data, null, 4)}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Child;