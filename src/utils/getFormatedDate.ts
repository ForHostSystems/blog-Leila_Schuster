export function getFormatedDate(date: string): string {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const day = new Date(date).getDate();
  const month = months[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  const newDate = `${day} de ${month} de ${year}`;
  return newDate;
}
