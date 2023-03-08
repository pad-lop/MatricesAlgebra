import FormMatrixA from "../components/formMatrixA";
import OutputMatrix from "../components/outputMatrix";
import FormMatrixB from "../components/formMatrixB";

function Multiply() {
    return (
        <div>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    margin: "10px",
                    backgroundColor: "#454545",
                    padding: "10px",
                    borderRadius: "20px",
                }}
            >
                <a href="/">
                <button>
                    Atrás
                </button>
                </a>
            </div>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <FormMatrixA />
                <FormMatrixB />
            </div>

            <div
                style={{
                    borderRadius: "25px",
                    margin: "10px",
                    padding: "10px",
                    backgroundColor: "gray",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <OutputMatrix />
            </div>
        </div>
    );
}

export default Multiply;
