import { useState } from "react";

const Welcome = () => {
    const [sayWelcome, setSayWelcome] = useState('');
  return (
    <section className="py-3 text-center">
      <h1>Welcome {sayWelcome}</h1>
      <button onClick={() => setSayWelcome('Ikhwan')} className="px-3 py-2 mt-3 mr-1 text-white bg-blue-500 rounded-md">Say welcome</button>
      <button onClick={() => setSayWelcome('')} className="px-3 py-2 mt-3 text-white bg-red-500 rounded-md">Reset</button>
    </section>
  );
};

export default Welcome;