/* add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleBook({token}) {
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();
  const [successMessage, setSuccessMessage] = useState("");
  
  async function getBook() {
    try {
      const response = await fetch(`${API_URL}/books/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setBookDetails(result.book);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBook();
  }, [bookDetails]);

  // registered user can checkout book
  async function handleClick() {
    try {
      const response = await fetch(`${API_URL}/books/${bookDetails.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ available: 'false' }),
      });
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="singleBook">
        <h1>{bookDetails.title}</h1>
        <h2>{bookDetails.author}</h2>
        <img src={bookDetails.coverimage} alt="book cover page" />
        <p>{bookDetails.description}</p>
        <h3>Availability: {
          bookDetails.available ?
            // available, check token
            (
              token ?
                // has token
                (
                  <>
                  <p>This book is currently available for checkout</p>
                  <button onClick={()=>{handleClick()}}><h3>Checkout</h3></button>
                  </>
                )
                :
                // doesn't have token
                (<p>This book is currently available for checkout, please log in to check book out.</p>)
            )
            :
            // book is unavailable
            (<p>This book is currently unavailable for checkout</p>)
          }</h3>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}
