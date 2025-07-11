import { useEffect, useState } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2506-Fabiana";
const API = BASE_URL + COHORT;

export default function useGuests() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const list = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}/guests`);
        if (!response.ok) throw Error("something went wrong");
        const result = await response.json();
        setGuests(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    list();
  }, []);

  return { guests, loading };
}
