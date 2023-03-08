import { useAppDispatch, useAppSelector } from "../hooks";
import InputGJ from "./inputGJ";

import {
    updateDimension_n,

    submitDimension_n,

    submitDimension_k,
    submitDimension_m,

} from "../features/matrix/matrixSlice";

function FormGJ() {
    const matrixes = useAppSelector((state) => state.matrixes);

    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(submitDimension_n(matrixes.cacheDimension_n))
        dispatch(submitDimension_k(matrixes.cacheDimension_n))
        dispatch(submitDimension_m(matrixes.cacheDimension_n))

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
            <div
            style={{
                marginTop:"10px",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#454545"
            }}
            >
                <div style={{
                    display:"grid",
                    placeItems:"center"

                }}>
                Dimensiones de la Matriz: 
                </div>
                &nbsp;
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

            <button 
            style ={{
                marginLeft: "10px",
            }}onClick={handleSubmit}>Ingresar Matriz</button>
            </div>

            <InputGJ/>
        </form>
    );
}

export default FormGJ;
