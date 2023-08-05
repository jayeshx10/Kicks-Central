import "styles/home.css";

export const ListItemCard = ({ imgUrl, title, type }) => {
  return (
    <li className="ul__li">
      <img src={imgUrl} className="li__img" />
      <p className="li__title">{title}</p>
      <p className="li__type">{type}</p>
    </li>
  );
};
