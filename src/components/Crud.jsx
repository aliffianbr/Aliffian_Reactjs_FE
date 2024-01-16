import { useEffect, useState } from "react";

const Crud = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBuyer = {
      id: data.length + 1,
      nama: event.target.nama.value,
      deskripsi: event.target.deskripsi.value,
      harga: event.target.harga.value,
    };
    setData([...data, newBuyer]);
    event.target.reset();
    localStorage.setItem("data", JSON.stringify([...data, newBuyer]));
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    const index = data.findIndex((item) => item.id === id);
    setEditIndex(index);
    document.getElementById("nama").value = data[index].nama;
    document.getElementById("deskripsi").value = data[index].deskripsi;
    document.getElementById("harga").value = data[index].harga;
  };

  const editSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      id: data[editIndex].id,
      nama: event.target.nama.value,
      deskripsi: event.target.deskripsi.value,
      harga: event.target.harga.value,
    };

    const newData = [...data];
    newData[editIndex] = editedData;

    setData(newData);
    event.target.reset();
    setIsEdit(false);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.getItem("data") &&
      setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <section className="mt-24">
      <h1>Crud</h1>
      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Nama buku</th>
                <th>Deskripsi</th>
                <th>Harga buku</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.nama}</td>
                    <td>{item.deskripsi}</td>
                    <td>{item.harga}</td>
                    <td>
                      <button
                        className="mr-1 btn btn-warning"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Data tidak ditemukan</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-xl font-bold">Tambah Data</h1>
        <hr />
        <form action="" onSubmit={isEdit ? editSubmit : handleSubmit}>
          <label htmlFor="nama">Nama buku</label>
          <br />
          <input
            type="text"
            id="nama"
            className="w-full max-w-xs input input-bordered"
          />
          <br />
          <label htmlFor="deskripsi">Deskripsi</label>
          <br />
          <input
            type="text"
            id="deskripsi"
            className="w-full max-w-xs input input-bordered"
          />
          <br />
          <label htmlFor="harga">Harga buku</label>
          <br />
          <input
            type="number"
            id="harga"
            className="w-full max-w-xs input input-bordered"
          />
          <br />
          <button className="mt-2 btn btn-primary">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Crud;
