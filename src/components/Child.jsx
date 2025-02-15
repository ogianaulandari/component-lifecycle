
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
    <section>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        onClick={handleAddNewPost}
      >
        Add new data
      </button>
    </section>
  );
};

export default Child;
