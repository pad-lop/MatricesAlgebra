import { useAppDispatch, useAppSelector } from "../hooks";
import { multiplyMatrices } from "../features/matrix/matrixSlice";

function OutputMatrix() {
    const matrixes = useAppSelector((state) => state.matrixes);
    const dispatch = useAppDispatch();

    const multiplicar = () => {
        dispatch(multiplyMatrices());
    };

    const dimensions = [
        matrixes.matrix_R.length,
        matrixes.matrix_R.reduce((x, y) => Math.max(x, y.length), 0),
    ];
    
    const rowMax = dimensions[0];
    const columnMax = dimensions[1];

    let rows = [];
    for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
        let columns = [];
        for (let columnIndex = 0; columnIndex < columnMax; columnIndex++) {
            columns.push(
                <td key={columnIndex}>
                    <input
                        style={{
                            width: "100px",
                        }}
                        value={matrixes.matrix_R[rowIndex][columnIndex]}
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    ></input>
                </td>
            );
        }
        rows.push(<tr key={rowIndex}>{columns}</tr>);
    }

    return (
        <div 
            style={{
                display: "grid",
                placeItems: "center"
            }}
        >
            <button onClick={multiplicar}>Multiplicar</button>

            <div>
                <table
                    style={{
                        marginTop: "10px",
                        backgroundColor: "#454545",
                        marginBottom: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </div>
    );
}

export default OutputMatrix;
