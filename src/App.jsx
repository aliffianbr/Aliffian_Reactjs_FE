import { useState } from "react";
import Buku from "./components/Buku";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Crud from "./components/Crud";
import Lifecycle from "./components/Lifecycle";
import Mapping from "./components/Mapping";
import Navbar from "./components/Navbar";
import Peminjam from "./components/Peminjam";
import Welcome from "./components/Welcome";

function App() {
  const [isPinjam, setIsPinjam] = useState(false);
  return (
    <main className="bg-stone-300/70">
      <Navbar />
      <section className="w-3/4 mx-auto bg-stone-300/70">
        {/* <Carousel />
        <Welcome />
        <Mapping />
        <section className="flex gap-4 mt-2">
          <Card />
          <Card />
        </section>
        <Lifecycle /> */}
        {/* <Crud /> */}
        <section className="mt-20">
          <button
            onClick={() => setIsPinjam(false)}
            className={`btn btn-ghost mr-2 ${
              !isPinjam ? "bg-black/80" : "bg-stone-500/60"
            } text-white`}
          >
            Data Buku
          </button>
          <button
            onClick={() => setIsPinjam(true)}
            className={`btn btn-ghost text-white ${
              !isPinjam ? "bg-stone-500/60" : "bg-black/80"
            }`}
          >
            Peminjam
          </button>
        </section>
        {isPinjam ? <Peminjam /> : <Buku />}
      </section>
    </main>
  );
}

export default App;
