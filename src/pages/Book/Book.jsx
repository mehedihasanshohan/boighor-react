import React, { use } from "react";

const Book = ({ bookPromise }) => {
  // React's experimental "use" hook for awaiting async data
  const books = use(bookPromise);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 Book List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition-all"
          >
            <img
              src={book.image}
              alt={book.bookName}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg text-teal-200 font-semibold">{book.bookName}</h3>
            <p className="text-amber-600 text-sm mb-2">by {book.author}</p>
            <p className="text-gray-400 text-sm line-clamp-3 mb-3">
              {book.review.slice(0, 120)}...
            </p>

            <div className="flex justify-between text-sm">
              <span className="font-medium">⭐ {book.rating}</span>
              <span className="text-gray-200">{book.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
