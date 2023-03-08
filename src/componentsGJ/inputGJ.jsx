import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { submitMatrix_A, submitMatrix_B } from "../features/matrix/matrixSlice";

function InputGJ() {
    const matrixes = useAppSelector((state) => state.matrixes);

    const dispatch = useAppDispatch();

    const [matrix, setMatrix] = useState("");
    const [matrix2, setMatrix2] = useState("");

    const initiateMatrix = () => {
        setMatrix(
            Array(matrixes.dimension_n)
                .fill(0)
                .map((row, index) => new Array(matrixes.dimension_k).fill(0))
        );
        setMatrix2(Array(matrixes.dimension_n).fill(0));
    };

    const handleChange = (row, column, event) => {
        let copy = [...matrix];
        copy[row][column] = +Number(event.target.value);
        setMatrix(copy);
    };

    const handleSecondChange = (row, event) => {
        let copy = [...matrix2];
        copy[row] = +Number(event.target.value);
        setMatrix2(copy);
    };

    let rows = [];
    for (let rowIndex = 0; rowIndex < matrixes.dimension_n; rowIndex++) {
        let columns = [];

        let limit = matrixes.dimension_k + matrixes.dimension_k + 2;

        for (let columnIndex = 0; columnIndex < limit; columnIndex++) {
            if (columnIndex == limit - 2) {
                columns.push(<td key={columnIndex*columnIndex}>&nbsp;&nbsp;=&nbsp; &nbsp; </td>);
            } else if ((columnIndex + 1) % 2 == 0 && columnIndex != limit - 1) {
                columns.push(
                    <td key={columnIndex*columnIndex}>
                        x
                        <sub>
                            {rowIndex + 1}
                            {columnIndex / 2 + 0.5}
                        </sub>
                    </td>
                );
            } else if (columnIndex == limit - 1) {
                columns.push(
                    <td key={columnIndex / 2 + 0.5}>
                        <input
                            style={{
                                width: "100px",
                            }}
                            onChange={(e) =>
                                handleSecondChange(rowIndex, e)
                            }
                            type="number"
                            pattern="[0-9]*"
                            inputMode="numeric"
                        ></input>
                    </td>
                );
            } else {
                columns.push(
                    <td key={columnIndex / 2 + 0.5}>
                        <input
                            style={{
                                width: "100px",
                            }}
                            onChange={(e) =>
                                handleChange(rowIndex, columnIndex / 2, e)
                            }
                            type="number"
                            pattern="[0-9]*"
                            inputMode="numeric"
                        ></input>
                    </td>
                );
            }
        }
        rows.push(<tr key={rowIndex}>{columns}</tr>);
    }

    const submitMatrix = () => {
        dispatch(submitMatrix_A(matrix));
        dispatch(submitMatrix_B(matrix2));
        console.log("Matriz A:", matrixes.matrix_A);
        console.log("Matriz B:", matrixes.matrix_B);
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
            <button onClick={submitMatrix}>Subir Matriz</button>
        </div>
    );
}

export default InputGJ;
