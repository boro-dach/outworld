const pluralize = (
  count: number,
  one: string,
  few: string,
  many: string
): string => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 19) {
    return many;
  }
  if (mod10 === 1) {
    return one;
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return few;
  }
  return many;
};

export const formatPlaytime = (ms: number | null | undefined): string => {
  if (ms === null || ms === undefined || ms < 0) {
    return "Нет данных";
  }

  const totalMinutes = Math.floor(ms / (1000 * 60));

  if (totalMinutes === 0) {
    return "0 минут";
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const parts: string[] = [];

  if (hours > 0) {
    const hourText = pluralize(hours, "час", "часа", "часов");
    parts.push(`${hours} ${hourText}`);
  }

  if (minutes > 0 || hours === 0) {
    const minuteText = pluralize(minutes, "минута", "минуты", "минут");
    parts.push(`${minutes} ${minuteText}`);
  }

  return parts.join(" ");
};
