import { createSlice } from "@reduxjs/toolkit";

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
            var a = state.matrix_A,
                b = state.matrix_B;

            var aNumRows = a.length,
                aNumCols = a[0].length,
                bNumRows = b.length,
                bNumCols = b[0].length,
                m = new Array(aNumRows); // initialize array of rows
            for (var r = 0; r < aNumRows; ++r) {
                m[r] = new Array(bNumCols); // initialize the current row
                for (var c = 0; c < bNumCols; ++c) {
                    m[r][c] = 0; // initialize the current cell
                    for (var i = 0; i < aNumCols; ++i) {
                        m[r][c] += a[r][i] * b[i][c];
                    }
                }
            }

            state.matrix_R = m;
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
