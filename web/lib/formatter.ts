export function formatDate(date: Date) {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}

export function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes().toLocaleString("sk-SK", { minimumIntegerDigits: 2 });
  return `${hours}:${minutes}`;
}