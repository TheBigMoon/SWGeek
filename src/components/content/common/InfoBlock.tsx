import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface InfoBlockProps {
  links: Array<string> | undefined,
  linksName: string,
  name: string
}

const InfoBlock: React.FC<InfoBlockProps> = ({ links, linksName, name }) => {
  const [showLinks, toggleLinks] = useState(false);

  let counter = 1;
  const allLinks = links?.length ? links?.map((link) => (
    <div>
      <NavLink exact to={link.replace('http://swapi.dev/api', '')}>
        {`${linksName} ${counter++}`}
      </NavLink>
    </div>
  ))
    : <div>No links</div>;
  return (
    <div>
      <div onClick={() => toggleLinks(!showLinks)} role="presentation">
        {showLinks ? `Hide ${name}` : `Show ${name}`}
      </div>
      {showLinks ? (<div>{allLinks}</div>) : null}
    </div>
  );
};
export default InfoBlock;
