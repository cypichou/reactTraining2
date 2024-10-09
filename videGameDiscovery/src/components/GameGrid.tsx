import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Games[];
}

function GameGrid() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<fetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
