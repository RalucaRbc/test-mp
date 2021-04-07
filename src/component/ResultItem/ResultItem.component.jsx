import React from "react";
import * as RI from "./ResultItem.style";

export const ResultItem = ({ type, name, ...rest }) => {
  return (
    <div>
      <RI.StyledTitle>{name || ""}</RI.StyledTitle>
      {type === "team" && (
        <div>
          <RI.StyledSubtitle>{rest.sport}</RI.StyledSubtitle>
          <RI.StyledLogo>
            <img src={rest.teamCrest} alt={`${name} - ${rest.sport}`} />
          </RI.StyledLogo>
        </div>
      )}
      {type === "venue" && (
        <div>
          <RI.StyledSubtitle>{rest.distance} miles away</RI.StyledSubtitle>
          <RI.StyledLogo>
            <img src={rest.image} alt={`${name}`} />
          </RI.StyledLogo>
        </div>
      )}
      {type === "fixture" && (
        <div>
          <RI.StyledSubtitle>
            {rest.team1 || ""} - {rest.team2 || ""}
          </RI.StyledSubtitle>
          <RI.StyledLogo>
            <img src={rest.sportLogo} alt={`${name || ""}`} />
          </RI.StyledLogo>
        </div>
      )}
      <RI.StyledArrow>arrow right icon to be imported</RI.StyledArrow>
      <br />
    </div>
  );
};
