const Mapping = () => {
    return ( 
        <section className="flex justify-center gap-24 my-3">
            <section>
                <h1 className="text-xl font-bold">Mapping</h1>
                {data.map((item, index) => (
                    <p key={index}>{item.nama} - {item.harga}</p>
                ))}
            </section>
            <section>
                <h1 className="text-xl font-bold">Filter</h1>
                {data.filter(item => item.harga > 30000).map((item, index) => (
                    <p key={index}>{item.nama} - {item.harga}</p>
                ))}
            </section>
            <section>
                <h1 className="text-xl font-bold">Reduce</h1>
                {data.reduce((total, item) => total + item.harga, 0)}
            </section>
            <section>
                <h1 className="text-xl font-bold">Reduce Filter</h1>
                {data.filter(item => item.harga > 30000).reduce((total, item) => total + item.harga, 0)}
            </section>
        </section>
     );
}
 
export default Mapping;

export const data = [
    {
        nama: 'Salmon',
        harga: 10000,
    },
    {
        nama: 'Tuna',
        harga: 20000,
    },
    {
        nama: 'Haddock',
        harga: 30000,
    },
    {
        nama: 'Herring',
        harga: 40000,
    },
    {
        nama: 'Cod',
        harga: 50000,
    }
]