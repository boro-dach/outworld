import axios from "axios";
import Cookies from "js-cookie";
import { PlayersApiResponse } from "../model/types";

export const getPlaytime = async (
  playerName: string
): Promise<number | null> => {
  if (!playerName) {
    return null;
  }

  try {
    const response = await axios.get<PlayersApiResponse>(
      `${process.env.NEXT_PUBLIC_STATS_URL}/playersTable?server=Server 1`
    );

    const allPlayers = response.data.players;

    const targetPlayer = allPlayers.find((p) => p.playerName === playerName);

    if (targetPlayer) {
      return targetPlayer.playtimeActive;
    } else {
      console.warn(`Игрок с ником "${playerName}" не найден в ответе API.`);
      return null;
    }
  } catch (error) {
    console.error("Ошибка при получении данных об игроках:", error);
    return null;
  }
};
