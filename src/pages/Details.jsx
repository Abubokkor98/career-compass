import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Details() {
  const {
    image,
    serviceName,
    description,
    category,
    pricing,
    duration,
    counselor,
    rating,
    id,
  } = useLoaderData();
  const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]); // Add new comment to the list
            setComment(""); // Clear the input field
        }
    };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div>
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
    <img
      className="w-full h-64 rounded-lg object-cover"
      src={image}
      alt={serviceName}
    />
    <div className="p-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{serviceName}</h3>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Price:</strong> ${pricing}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Counselor:</strong> {counselor}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Duration:</strong> {duration}
      </p>
      <div className="flex items-center mt-2">
        <strong className="text-sm text-gray-600 mr-2">Rating:</strong>
        <Rating
          initialRating={rating}
          emptySymbol={<AiOutlineStar className="text-yellow-400" />}
          fullSymbol={<AiFillStar className="text-yellow-400" />}
          readonly
        />
        <span className="text-sm text-gray-600 ml-2">({rating})</span>
      </div>
      <div className="mt-4">
        <strong className="text-sm text-gray-800 block mb-1">Description:</strong>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
      </div>
      {/* comment */}
      <div className='w-4/12 mx-auto my-6 p-4 '>
                <h2 className='text-2xl font-semibold mb-4'>Leave a comment here</h2>


                <form onSubmit={handleCommentSubmit} className='flex flex-col md:flex-row gap-4'>
                    <input
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className='flex-1 p-2 border border-gray-300 rounded-md'
                        placeholder='Write a comment...'
                    />
                    <button type='submit' className='btn btn-primary px-4 py-2'>
                        Submit
                    </button>
                </form>

                {/* Display Comments */}
                <div className='mt-6 space-y-4'>
                    {comments.length > 0 ? (
                        comments.map((cmt, index) => (
                            <div key={index} className='p-2 bg-gray-100 rounded-md shadow'>
                                {cmt}
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-600'>No comments yet. Be the first to comment!</p>
                    )}
                </div>
            </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
