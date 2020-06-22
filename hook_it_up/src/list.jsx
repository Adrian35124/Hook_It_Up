import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PreviewList = () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let list = await res.json();
    setList(list);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {list.map((list) => (
                <>
                  <li key={list.id} className="list-group-item">
                    {list.title}
                  </li>

                  <Link to={`/films/${list.id}`}>
                    <button className="btn btn-success btn-md">
                      More Info
                    </button>
                  </Link>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreviewList;
