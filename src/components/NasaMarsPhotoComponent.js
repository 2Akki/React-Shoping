import React, { useState, useEffect } from "react";

function NasaMarsPhotoComponent() {
  const [marsdata, setmarsData] = useState({});
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        setmarsData(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h3> Mars rows Photos</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Photo</th>
            <th>Rover Name</th>
          </tr>
        </thead>
        <tbody>
          {marsdata.photos.map((item) => (
            <tr>
              <td>{item.id}</td>
            </tr>
          ))}
       </tbody>
      </table>
    </div>
  );
}

export default NasaMarsPhotoComponent;
