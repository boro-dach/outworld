export const userQueries = {
  all: ["user"] as const,
  login: () => [...userQueries.all, "login"] as const,
  isVerified: () => [...userQueries.all, "isVerified"] as const,
  role: () => [...userQueries.all, "role"] as const,
};
