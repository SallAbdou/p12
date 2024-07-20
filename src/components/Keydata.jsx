const Keydata = ({ data }) => (
    <div className="key-data-button">
        <div
            className="key-data-img-container"
            style={{ backgroundColor: data.backgroundColor }}
        >
            <img src={data.img} alt={data.name} />
        </div>
        <div className="key-data-description">
            <span className="key-data-quantity">
                {data.quantity}
                {data.measure}
            </span>
            <span className="key-data-name">{data.name}</span>
        </div>
    </div>
)

export default Keydata;