const Jokes = ({ jokess, setJokes }) => {
  const generateJokes = async () => {
    try {
      const headers = {
        headers: {
          Accept: "application/json",
        },
      };
      const res = await fetch("https://icanhazdadjoke.com/", headers);
      const data = await res.json();
      const jokesOut = await data.joke;
      setJokes(jokesOut);
    } catch (err) {
      console.log(`the error is ${err}`);
    }
  };

  return (
    <div>
      <button onClick={() => generateJokes()}>Click</button>
      <p>{jokess}</p>
    </div>
  );
};

export default Jokes;
