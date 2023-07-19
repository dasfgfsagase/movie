import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Section.css";

function Section({id, coverImg, title, summary, genres}) {
  return (
        <div className="movie-card">
            <img src={coverImg} alt="title"/>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            {/* <p>{summary}</p> */}
            {/* <ul>
              {genres.map((g) => (<li>{g}</li>))}
            </ul> */}
        </div>
  );
}

Section.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Section;