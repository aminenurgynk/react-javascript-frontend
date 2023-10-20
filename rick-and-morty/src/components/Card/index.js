import { useEffect, useState } from "react";
import cn from "classnames";

import Content from "./content";

import { getEpisodeName } from "../../services";

import "./index.scss";

const Card = ({
  image,
  name,
  status,
  species,
  url,
  location: { url: locUrl, name: locName },
  episode,
}) => {
  const [episodeName, setEpisodeName] = useState("");


  useEffect(() => {
    getEpisodeName(episode[0]).then((response) => {
      setEpisodeName(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cn("card")}>
      <div className="card-container">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <div>
          <h2>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          </h2>
          <p className="card-info-status">
            <span
              className={cn(
                "circle",
                status.toLowerCase() /*, {
                dead: status === "Dead",
                alive: status === "Alive",
                unknown: status === "unknown",
              }*/
              )}
            />
            {status} - {species}
          </p>
        </div>
        <Content
          title="Last known location:"
          href={locUrl}
          description={locName}
        />
        <Content
          title="First seen in:"
          href={episode[0]}
          description={episodeName}
        />
      </div>
      </div>
    </div>
  );
};

export default Card;
