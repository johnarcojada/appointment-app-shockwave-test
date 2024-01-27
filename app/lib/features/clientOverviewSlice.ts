import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ContactInformationState = {
  name: string;
  email: string;
  phone: string;
  address: string;
};
type ClinicDetails = {
  name: string;
  place: string;
  email: string;
  phone: string;
  address: string;
};
type PetDetails = {
  name: string;
  type: string;
  breed: string | undefined | null;
  sex: string;
  age: string | undefined | null;
  birthday: string | undefined | null;
};

const initialState = {
  isClientOverviewOpen: false,
  clientInformation: {
    name: "",
    email: "",
    phone: "",
    address: "",
  } as ContactInformationState,
  clientDetails: {
    name: "",
    place: "",
    email: "",
    phone: "",
    address: "",
  } as ClinicDetails,
  petDetails: {
    name: "",
    type: "",
    breed: "" || undefined || null,
    sex: "" || "Male" || "Female",
    age: "" || undefined || null,
    birthday: "" || undefined || null,
  } as PetDetails,
};

export const clientOverview = createSlice({
  name: "clientOverview",
  initialState,
  reducers: {
    setIsClientOverviewOpen: (state, action: PayloadAction<boolean>) => {
      state.isClientOverviewOpen = action.payload;
    },
  },
});

export const { setIsClientOverviewOpen } = clientOverview.actions;
export default clientOverview.reducer;
