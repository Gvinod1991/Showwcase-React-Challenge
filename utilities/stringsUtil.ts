interface shortStringProps {
  title: string,
  length: number
}
export const getShortString = ({ title, length }) => {
  return title.length > length ? `${title.substr(0, length)}...` : title;
}