import FormMatrixA from "./components/formMatrixA";
import OutputMatrix from "./components/outputMatrix";
import FormMatrixB from "./components/formMatrixB";

function App() {
    return (
        <div className="App">
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

export default App;
