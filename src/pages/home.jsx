function Home() {
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                margin: "10px",
                backgroundColor: "#454545",
                padding: "10px",
                borderRadius: "20px",
                rowGap: "10px"
            }}
        >
            <a href="/multiply">
                <button href> Multiplicar </button>
            </a>
            <a href="/GaussJordan">
                <button href> Gauss Jordan </button>
            </a>
        </div>
    );
}

export default Home;
