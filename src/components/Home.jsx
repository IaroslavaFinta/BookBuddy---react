import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Book Buddy</h1>
      <p>
      Discover here how stories come to life and imaginations soar. As you step into our world of words, you embark on a journey through the vast landscapes of knowledge, adventure, and discovery.
      </p>
      <p>
      Within our library, you will find more than just books; you will find portals to other realms, windows into history, and pathways to understanding. Our collection spans genres and generations, catering to every curiosity and passion.
      </p>
      <p>
      Whether you seek the guidance of ancient philosophers, the excitement of gripping tales, or the tranquility of a quiet corner, our library is your sanctuary. Let the whispers of countless authors, past and present, guide you through the vast sea of human understanding.
      </p>
      <p>
      Welcome to a place where every book is a doorway to another world, and every reader is an explorer. Embrace the magic that words create, and may your time here be filled with discovery, enlightenment, and the joy of reading.
      </p>
      <h2>Happy reading!</h2>
      <h3>
      Browse books available
        <Link to="/books"> here</Link>
      </h3>
    </div>
  );
}
