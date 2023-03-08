import { useAppDispatch, useAppSelector } from "../hooks";
import {
    calculateInverseMatrix,
    calculateDeterminant,
    multiplyMatrices,
} from "../features/matrix/matrixSlice";

import Fraction from "fraction.js";

function OutputGJ() {
    const matrixes = useAppSelector((state) => state.matrixes);
    const dispatch = useAppDispatch();

    const calcularMatrizInversa = () => {
        dispatch(calculateInverseMatrix());
    };

    const calcularDeterminante = () => {
        dispatch(calculateDeterminant());
    };

    const multiplicar = () => {
        dispatch(multiplyMatrices());
    };

    let inverseMatrixTable = [];
    for (
        let rowIndex = 0;
        rowIndex < matrixes.inverseMatrix.length;
        rowIndex++
    ) {
        let columns = [];
        for (
            let columnIndex = 0;
            columnIndex <
            matrixes.inverseMatrix.reduce((x, y) => Math.max(x, y.length), 0);
            columnIndex++
        ) {
            columns.push(
                <td key={columnIndex}>
                    <input
                        style={{
                            width: "100px",
                        }}
                        defaultValue={Fraction(
                            matrixes.inverseMatrix[rowIndex][columnIndex]
                        ).toFraction(true)}
                    ></input>
                </td>
            );
        }
        inverseMatrixTable.push(<tr key={rowIndex}>{columns}</tr>);
    }

    let rows = [];
    for (let rowIndex = 0; rowIndex < matrixes.matrix_R.length; rowIndex++) {
        let columns = [];
        columns.push(
            <td key={rowIndex}>
                <input
                    style={{
                        width: "100px",
                    }}
                    defaultValue={matrixes.matrix_R[rowIndex]}
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                ></input>
            </td>
        );

        rows.push(<tr key={rowIndex}>{columns}</tr>);
    }

    const dontwantchange = () => {
        return matrixes.solucionDeterminante;
    };

    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                rowGap: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <button onClick={calcularDeterminante}>
                    Calcular Determinante
                </button>
                <input
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "5px",
                    }}
                    value={matrixes.solucionDeterminante}
                    onChange={dontwantchange}
                ></input>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <button onClick={calcularMatrizInversa}>Matriz Inversa</button>

                <table>
                    <tbody>{inverseMatrixTable}</tbody>
                </table>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <button onClick={multiplicar}>Multiplicar</button>
                <div>
                    <table>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OutputGJ;
