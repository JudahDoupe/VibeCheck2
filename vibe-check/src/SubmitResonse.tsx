import React from 'react';
import { useParams } from 'react-router-dom';

const SubmitResponse: React.FC = () => {
  const { code } = useParams<{ code: string }>();

  return (
    <div>
      <h1>Welcome to the Second Page</h1>
      <p>The code you entered is: {code}</p> {/* Display the code */}
    </div>
  );
};

export default SubmitResponse;