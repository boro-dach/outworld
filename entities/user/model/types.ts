export interface User {
  login: string;
}

export interface UserStore {
  login: string | null;
  setLogin: (login: string | null) => void;
  clearLogin: () => void;
}

interface Player {
  playerUUID: string;
  playerName: string;
  activityIndex: number;
  playtimeActive: number; // Это то, что нам нужно!
  sessionCount: number;
  lastSeen: number;
  registered: number;
  pingAverage: number;
  pingMax: number;
  pingMin: number;
  extensionValues: object;
}

export interface PlayersApiResponse {
  timestamp: number;
  timestamp_f: string;
  players: Player[]; // Массив игроков
  extensionDescriptors: any[];
}
