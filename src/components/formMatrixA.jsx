import { useAppDispatch, useAppSelector } from "../hooks";
import InputMatrixA from "./inputMatrixA";

import {
    updateDimension_k,
    updateDimension_n,

    submitDimension_k,
    submitDimension_n

} from "../features/matrix/matrixSlice";

function FormMatrixA() {
    const matrixes = useAppSelector((state) => state.matrixes);

    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(submitDimension_n(matrixes.cacheDimension_n))
        dispatch(submitDimension_k(matrixes.cacheDimension_k))
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}
            style={{
                borderRadius: "25px",
                margin: "10px",
                padding: "10px",
                backgroundColor: "gray",
                display:"grid",
                placeItems:"center"
            }}
        >
            <h2> Matriz A</h2>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#454545"
            }}
            >
            <input
                value={matrixes.cacheDimension_n}
                name="n"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) =>
                    dispatch(updateDimension_n(Number(e.target.value)))
                }
                style={{
                    width: `${matrixes.cacheDimension_n.toString().length}ch`,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "5px",

                }}
            ></input>

            <div
                style={{
                    display: "grid",
                    placeItems: "center"
                }}
            >
            &nbsp;X&nbsp;
            </div>
            
            <input
                value={matrixes.cacheDimension_k}
                name="k"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) =>
                    dispatch(updateDimension_k(Number(e.target.value)))
                }
                style={{
                    width: `${matrixes.cacheDimension_k.toString().length}ch`,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "5px",

                }}
            ></input>
            <button 
            style ={{
                marginLeft: "10px",
            }}onClick={handleSubmit}>Ingresar Matriz</button>
            </div>

            <InputMatrixA/>
        </form>
    );
}

export default FormMatrixA;
