import "./DashNews.css";
import { AiFillEdit } from "react-icons/ai";
import DashNewsProps from "./DashNewsProps";

const DashNews = ({
  header,
  date,
  author,
  shortcut,
  thumbnail,
}: DashNewsProps) => {
  return (
    <li className="dashboard-news-item">
      <div className="thumbnail-wrapper">
        <img className="thumbnail" src={thumbnail} alt="news-thumbnail" />
      </div>

      <div className="news-content">
        <div className="news-details">
          <div className="details-left">
            <h3 className="news-header">{header}</h3>
            <span className="news-description">
              {date} | {author}
            </span>
          </div>

          <div className="details-right">
            <AiFillEdit className="edit-icon" />
          </div>
        </div>
        <p>{shortcut}</p>
      </div>
    </li>
  );
};

export default DashNews;
