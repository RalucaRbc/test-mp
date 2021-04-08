import React from "react";
import * as RI from "./ResultItem.style";

export const ResultItem = ({ type, name, ...rest }) => {
  return (
    <RI.StyledWrappper>
      <RI.StyledTitle>
        {name
          ? type === "team"
            ? `${name} Team`
            : type === "venue"
            ? `${name} Bar`
            : name
          : ""}
      </RI.StyledTitle>
      {type === "team" && (
        <div>
          <RI.StyledLogo>
            <img
              src={rest.teamCrest}
              alt={`${name} - ${rest.sport}`}
              width="20px"
              height="20px"
            />
          </RI.StyledLogo>
          <RI.StyledSubtitle>{rest.sport}</RI.StyledSubtitle>
        </div>
      )}
      {type === "venue" && (
        <div>
          <RI.StyledLogo>
            <img src={rest.image} alt={`${name}`} width="20px" height="20px" />
          </RI.StyledLogo>
          <RI.StyledSubtitle>{`${rest.distance} miles away`}</RI.StyledSubtitle>
        </div>
      )}
      {type === "fixture" && (
        <div>
          <RI.StyledLogo>
            <img
              src={rest.sportLogo}
              alt={`${name || ""}`}
              width="20px"
              height="20px"
            />
          </RI.StyledLogo>
          <RI.StyledSubtitle>
            {rest.startTime || ""}
          </RI.StyledSubtitle>
        </div>
      )}
      <RI.StyledArrow>
        <span className="icon-arrow-right2"></span>
      </RI.StyledArrow>
      <br />
    </RI.StyledWrappper>
  );
};
