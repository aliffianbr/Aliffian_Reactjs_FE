const Card = () => {
    return ( 
        <section className="w-1/2">
            <div className="shadow-xl card lg:card-side bg-base-100">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="justify-end card-actions">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Card;