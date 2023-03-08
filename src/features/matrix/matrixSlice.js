import { createSlice } from "@reduxjs/toolkit";
import { inv, multiply } from "mathjs";

const initialState = {
    cacheDimension_n: 0,
    cacheDimension_k: 0,
    cacheDimension_m: 0,

    dimension_n: 0,
    dimension_k: 0,
    dimension_m: 0,

    matrix_A: [],
    matrix_B: [],
    matrix_R: [],
    inverseMatrix: [],

    solucionMatrizInversa: 0,
    solucionDeterminante: 0,
};

const matrixSlice = createSlice({
    name: "matrixState",
    initialState,
    reducers: {
        submitDimension_n: (state, action) => {
            state.dimension_n = action.payload;
        },
        submitDimension_k: (state, action) => {
            state.dimension_k = action.payload;
        },
        submitDimension_m: (state, action) => {
            state.dimension_m = action.payload;
        },

        submitMatrix_A: (state, action) => {
            state.matrix_A = action.payload;
        },
        submitMatrix_B: (state, action) => {
            state.matrix_B = action.payload;
        },

        multiplyMatrices: (state) => {
            state.matrix_R = multiply(state.inverseMatrix, state.matrix_B);
            console.log("Matriz Inversa X Vector Independiente: ",state.matrix_R);
        },

        calculateInverseMatrix: (state) => {
            let copy = [...state.matrix_A];
            state.inverseMatrix = inv(copy);
            console.log("Matriz Inversa:", state.inverseMatrix);
        },

        calculateDeterminant: (state) => {
            const determinant = (m) =>
                m.length == 1
                    ? m[0][0]
                    : m.length == 2
                    ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
                    : m[0].reduce(
                          (r, e, i) =>
                              r +
                              (-1) ** (i + 2) *
                                  e *
                                  determinant(
                                      m
                                          .slice(1)
                                          .map((c) =>
                                              c.filter((_, j) => i != j)
                                          )
                                  ),
                          0
                      );

            state.solucionDeterminante = determinant(state.matrix_A);
            console.log(state.solucionDeterminante);
        },

        updateDimension_n: (state, action) => {
            state.cacheDimension_n = action.payload;
        },
        updateDimension_k: (state, action) => {
            state.cacheDimension_k = action.payload;
        },
        updateDimension_m: (state, action) => {
            state.cacheDimension_m = action.payload;
        },
    },
});

export const {
    calculateDeterminant,
    calculateInverseMatrix,
    multiplyMatrices,
    submitMatrix_B,
    submitMatrix_A,
    submitDimension_n,
    submitDimension_k,
    submitDimension_m,
    updateDimension_k,
    updateDimension_m,
    updateDimension_n,
} = matrixSlice.actions;
export default matrixSlice.reducer;
