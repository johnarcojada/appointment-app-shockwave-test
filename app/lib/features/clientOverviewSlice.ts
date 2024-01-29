import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EventSources from "data/eventsSources.json";

export type ContactInformationState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
};
export type VetDetails = {
  vetId: string;
  image: string;
  name: string;
  building: string;
  email: string;
  phone: string;
  address: string;
};
export type PetDetails = {
  name: string;
  type: string;
  breed?: string | undefined | null;
  sex: string;
  age?: string | undefined | null;
  birthday?: string | undefined | null;
};

export type EventType = {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  icon: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  client: {
    clientInfo: ContactInformationState;
    vetDetails: VetDetails;
    petDetails: PetDetails;
  };
};

export type EventSourceType = [
  {
    events: EventType[];
  }
];

const initialState = {
  isClientOverviewOpen: false,
  eventSources: EventSources as EventSourceType,
  selectedClientOverview: {} as {
    events: EventType[];
  },
};

export const clientOverview = createSlice({
  name: "clientOverview",
  initialState,
  reducers: {
    setIsClientOverviewOpen: (state, action: PayloadAction<boolean>) => {
      state.isClientOverviewOpen = action.payload;
    },
    setSelectedClientOverview: (state, action: PayloadAction<string>) => {
      const eventSource = state.eventSources.find(
        (source) => source.events[0].id === action.payload
      );
      if (eventSource !== undefined) {
        state.selectedClientOverview = eventSource;
      }
    },
    addEvent: (state, action: PayloadAction<EventType>) => {
      const randomizedId = Math.floor(Math.random() * 1000000000);
      state.eventSources.push({
        events: [
          {
            ...action.payload,
            id: randomizedId.toString(),
          },
        ],
      });
    },
    updateEvent: (state, action: PayloadAction<EventType>) => {
      state.eventSources = state.eventSources.map((eventSource) => {
        if (eventSource.events[0].id === action.payload.id) {
          return { events: [action.payload] };
        }
        return eventSource;
      });
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      const filteredSources = state.eventSources.filter(
        (source) => (source.events as EventType[])[0].id !== action.payload
      );
      state.eventSources = filteredSources;
    },
  },
});

export const {
  setIsClientOverviewOpen,
  setSelectedClientOverview,
  addEvent,
  removeEvent,
  updateEvent,
} = clientOverview.actions;
export default clientOverview.reducer;
