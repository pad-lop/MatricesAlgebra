import { useAppDispatch, useAppSelector } from "../hooks";
import InputMatrixB from "./inputMatrixB";

import {
    updateDimension_k,
    updateDimension_m,

    submitDimension_k,
    submitDimension_m

} from "../features/matrix/matrixSlice";

function FormMatrixB() {
    const matrixes = useAppSelector((state) => state.matrixes);

    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(submitDimension_k(matrixes.cacheDimension_k))
        dispatch(submitDimension_m(matrixes.cacheDimension_m))
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
            <h2> Matriz B</h2>
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

            <div
                style={{
                    display: "grid",
                    placeItems: "center"
                }}
            >
            &nbsp;X&nbsp;
            </div>
            
            <input
                value={matrixes.cacheDimension_m}
                name="m"
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) =>
                    dispatch(updateDimension_m(Number(e.target.value)))
                }
                style={{
                    width: `${matrixes.cacheDimension_m.toString().length}ch`,
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

            <InputMatrixB/>
        </form>
    );
}

export default FormMatrixB;
