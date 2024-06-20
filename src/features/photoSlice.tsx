import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPhoto from '../interfaces';

interface IPhotoState {
  photos: IPhoto[];
}

const initialState: IPhotoState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action: PayloadAction<IPhoto>) {
      state.photos.push(action.payload);
    },
    removePhoto(state, action: PayloadAction<string>) {
      state.photos = state.photos.filter(image => image.id !== action.payload);
    },
  },
});

export const { addPhoto, removePhoto } = photoSlice.actions;
export default photoSlice.reducer;
