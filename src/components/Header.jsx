import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
