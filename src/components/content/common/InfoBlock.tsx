import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InfoName, StyledInfoBLock } from '../../../styledComponents/StyledInfoBLock';
import { FlexBox } from '../../../styledComponents/common/common';

interface InfoBlockProps {
  links: Array<string> | undefined,
  linksName: string,
  name: string
}

const InfoBlock: React.FC<InfoBlockProps> = ({ links, linksName, name }) => {
  const [showLinks, toggleLinks] = useState(false);
  const mappedLinks = links?.map((link) => {
    const page = link.replace('http://swapi.dev/api', '');
    const pageNumber = page.replace(/\D/g, '');
    return (
      <NavLink exact to={page}>
        {`${linksName} ${pageNumber}`}
      </NavLink>
    );
  });
  const allLinks = links?.length ? mappedLinks : <div>No links</div>;
  return (
    <StyledInfoBLock>
      <InfoName onClick={() => toggleLinks(!showLinks)} role="presentation">
        {showLinks ? `Hide ${name}` : `Show ${name}`}
      </InfoName>
      <FlexBox column>
        {showLinks ? allLinks : null}
      </FlexBox>
    </StyledInfoBLock>
  );
};
export default InfoBlock;
