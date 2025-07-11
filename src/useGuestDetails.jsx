import { useEffect, useState } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2506-Fabiana";
const API = BASE_URL + COHORT;

export default function useGuestDetails(guestId) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    if (!guestId) return;

    const details = async () => {
      setGuest(null);
      try {
        const response = await fetch(`${API}/guests/${guestId}`);
        if (!response.ok) throw Error("something went wrong");
        const result = await response.json();
        setGuest(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    details();
  }, [guestId]);

  return guest;
}
