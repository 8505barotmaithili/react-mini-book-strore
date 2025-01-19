import NonFictions from '../nonfiction.json'
import BookCard from './BookCard'
console.log(NonFictions)

export default function NonFiction() {
  return (
    <div>
      <h3>Non-Fiction Book</h3>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        { NonFictions.map((book) => (
          <BookCard title={book.title} img={book.img}
          author={ book.author} year={ book.year} price={ book.price}

          />
        ))}
    </div>
    </div>
  );
}
