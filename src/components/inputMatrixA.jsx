import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { submitMatrix_A } from "../features/matrix/matrixSlice";

function InputMatrixA() {
    const matrixes = useAppSelector((state) => state.matrixes);

    const dispatch = useAppDispatch();

    const [matrix, setMatrix] = useState("");

    const initiateMatrix = () => {
        setMatrix(
            Array(matrixes.dimension_n)
                .fill(0)
                .map((row, index) => new Array(matrixes.dimension_k).fill(0))
        );
    };

    const handleChange = (row, column, event) => {
        let copy = [...matrix];
        copy[row][column] = +Number(event.target.value);
        setMatrix(copy);
    };

    let rows = [];
    for (let rowIndex = 0; rowIndex < matrixes.dimension_n; rowIndex++) {
        let columns = [];
        for (
            let columnIndex = 0;
            columnIndex < matrixes.dimension_k;
            columnIndex++
        ) {
            columns.push(
                <td key={columnIndex}>
                    <input
                        style={{
                            width: "100px",
                        }}
                        onChange={(e) => handleChange(rowIndex, columnIndex, e)}
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    ></input>
                </td>
            );
        }
        rows.push(<tr key={rowIndex}>{columns}</tr>);
    }

    const submitMatrix = () => {
        dispatch(submitMatrix_A(matrix));
        console.log("Matriz A:", matrixes.matrix_A);
    };

    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                margin: "10px",
            }}
        >
            <button
                style={{
                    backgroundColor: "red",
                    margin: "10px",
                }}
                onClick={initiateMatrix}
            >
                Presione Antes de Ingresar los Datos
            </button>
            <table
                style={{
                    backgroundColor: "#454545",
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                <tbody>{rows}</tbody>
            </table>
            <button onClick={submitMatrix}>Subir Matriz A</button>
        </div>
    );
}

export default InputMatrixA;
