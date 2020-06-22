import React, { useState, useEffect } from "react";

const FilmDetails = (props) => {

  const { match } = props;
  let { id } = match.params;

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    let res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    let details = await res.json();
    setDetails(details);
    console.log(details)
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <h3 className="details-header">{details.title}</h3>
              <p>{details.description}</p>
              <p>dir. {details.director}</p>
              <p>Release date: {details.release_date}</p>
              <p>Rotten Tomatoes score: {details.rt_score}</p>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default FilmDetails;
