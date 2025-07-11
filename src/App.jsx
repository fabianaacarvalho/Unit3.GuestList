import { useState } from "react";
import useGuests from "./useGuests";
import useGuestDetails from "./useGuestDetails";

function GuestList({ guests, onSelect }) {
  return (
    <tbody>
      {guests.map((guest) => (
        <tr
          key={guest.id}
          onClick={() => onSelect(guest.id)}
          style={{ cursor: "pointer" }}
        >
          <td>{guest.name}</td>
          <td>{guest.email}</td>
          <td>{guest.phone}</td>
        </tr>
      ))}
    </tbody>
  );
}

function GuestDetails({ guest, onBack }) {
  if (!guest) return <p>Loading guest details...</p>;

  return (
    <div className="guest-details">
      <h2>{guest.name}</h2>
      <p>
        <b>Email:</b> {guest.email}
      </p>
      <p>
        <b>Phone:</b> {guest.phone}
      </p>
      <p>
        <b>Bio:</b> {guest.bio}
      </p>
      <p>
        <b>Job:</b> {guest.job}
      </p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const { guests, loading } = useGuests();
  const guest = useGuestDetails(selectedGuestId);

  return (
    <main>
      <h1>Guest List</h1>
      {selectedGuestId ? (
        <GuestDetails guest={guest} onBack={() => setSelectedGuestId(null)} />
      ) : loading ? (
        <p>Loading guests...</p>
      ) : (
        <>
          <table className="guest-table">
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </thead>
            <GuestList guests={guests} onSelect={setSelectedGuestId} />
          </table>
          <p>Select a guest to see more details.</p>
        </>
      )}
    </main>
  );
}
