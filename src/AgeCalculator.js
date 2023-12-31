import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    const ageInMilliseconds = today - birthdateDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div class="d1">
      <h1>Age Calculator</h1>
      <h3>By: Deepakram Bettarayan</h3>
      <h3>Enter your Date of Birth</h3>
      <input class="i1"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <button class="b1" onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p class="p1">Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;