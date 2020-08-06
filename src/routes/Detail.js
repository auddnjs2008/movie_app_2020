import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); // rerendring을 한다.
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div class="detail">
          <div class="img-wrapper">
            <img src={location.state.poster} alt={location.state.title} />
          </div>
          <div className="detail-wrapper">
            <img src={location.state.poster} alt={location.state.title} />
            <div className="detail__scripts">
              <h1 className="detail__title">{location.state.title}</h1>
              <h3 className="detail__year">{location.state.year}</h3>
              <ul className="detail__genre">
                {location.state.genres.map((genre, index) => (
                  <li>{genre}</li>
                ))}
              </ul>
              <p className="detail__content">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
