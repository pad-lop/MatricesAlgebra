import FormGJ from "../componentsGJ/formGJ";
import OutputGJ from "../componentsGJ/outputGJ";

function GaussJordan() {
    return (
        <div>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <FormGJ />
            </div>

            <div
                style={{
                    borderRadius: "25px",
                    margin: "10px",
                    padding: "10px",
                    backgroundColor: "#454545",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <OutputGJ />
            </div>
        </div>
    );
}

export default GaussJordan;
