import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  repository: any | null;
}

const initialState: ModalState = {
  isOpen: false,
  repository: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<any>) => {
      state.isOpen = true;
      state.repository = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.repository = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
