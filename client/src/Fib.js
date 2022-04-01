import { useEffect, useState } from "react";
import axios from "axios";

const Fib = () => {
  const [values, setValues] = useState({});
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [index, setIndex] = useState("");

  useEffect(() => {
    async function fetchValues() {
      const values = await axios.get("/api/values/current");
      setValues(values.data);
    }

    async function fetchIndexes() {
      const seenIndexes = await axios.get("/api/values/all");
      setSeenIndexes(seenIndexes.data);
    }

    fetchValues();
    fetchIndexes();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post("/api/values", {
      index,
    });
    setIndex("");
  };

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    return Object.keys(values).map((key) => (
      <div key={key}>
        For index {key} I calculated {values[key]}
      </div>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index</label>
        <input value={index} onChange={(evt) => setIndex(evt.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
