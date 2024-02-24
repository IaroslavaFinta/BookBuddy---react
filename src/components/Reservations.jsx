import { Link } from "react-router-dom";

export default function Reservations({ reservation, setReservations, token }) {
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  const handleClick = async () => {
    try {
      await fetch(`${API_URL}/reservations/${reservation.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setReservations([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h3>{reservation.title}</h3>
        <img
          src={reservation.coverimage}
          alt="cover image for reserved book"
        ></img>
        <Link
          onClick={() => {
            handleClick();
          }}
        >
          <button>
            <h3>Return</h3>
          </button>
        </Link>
      </div>
    </>
  );
}
