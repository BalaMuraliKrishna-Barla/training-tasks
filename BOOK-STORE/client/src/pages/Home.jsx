import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // const res = await axios.get('https://bookstore-server-po8m.onrender.com/api/v1/allbooks',{withCredentials: true});
        const res = await axios.get('http://localhost:5081/api/allbooks');
        //console.log('API Response:', res.data);
        setBooks(res.data.data); // Update books with the data property from the response
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]); // Set books to an empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  console.log('books object:', books);

  return (
    <div className='p-4'>
      <header className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold text-gray-800'>Books List</h1>
        <Link to='/create'>
          <button className='flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-lg'>
            <MdOutlineAddBox className='text-xl mr-1' />
            Add Book
          </button>
        </Link>
      </header>

      <div className='mt-4 flex justify-center items-center gap-x-4'>
        {loading ? <Spinner /> : <BooksCard books={books} />}
        
      </div>

    </div>
  );
};

export default Home;
