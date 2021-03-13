import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis asperiores numquam eos recusandae
        minus consequatur impedit cumque explicabo dolore esse, distinctio exercitationem doloribus ipsum earum veniam
        ex omnis. Incidunt.
      </p>
      <button className="btn" onClick={(): void => history.push('/')}>
        Back to the 'To-Do' page
      </button>
    </>
  );
};

export default AboutPage;
