
import Fictions from '../fiction.json'
import BookCard from './BookCard';


export default function Fiction() {
  
  return (
    <div>
      <h1></h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
       { Fictions.map((ele)=>(
        <BookCard title={ele.title} img={ele.img} author={ele.author} year={ele.year} price={ele.price}/>
       ))}
      
      </div>
    </div>
  );
}