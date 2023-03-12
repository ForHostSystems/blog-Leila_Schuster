import React, { createContext, ReactNode, useContext, useState } from "react";

import { ITimeLine, TimeLineDTO } from "@/mocks/mockedSlides";

interface TimelineContextProps {
  newMoments: ITimeLine[];
  handleChangeText: (text: string, position: number | null, field: string) => void;
  handleChangeImage: (image: File, position: number | null) => void;
}

const TimelineContext = createContext({} as TimelineContextProps);

interface TimelineProviderProps {
  moments: TimeLineDTO;
  children: ReactNode;
}

export const TimelineProvider = ({ children, moments }: TimelineProviderProps) => {
  const [newMoments, setNewMoments] = useState<ITimeLine[]>(moments as ITimeLine[]);

  const handleChangeText = (text: string, position: number | null, field: string) => {
    if (position != null) {
      newMoments[position][field] = text;
      setNewMoments([...newMoments]);
    }
  };

  const handleChangeImage = (image: File, position: number | null) => {
    if (position != null) {
      newMoments[position].image = image;
      setNewMoments([...newMoments]);
    }
  };

  return (
    <TimelineContext.Provider value={{ newMoments, handleChangeText, handleChangeImage }}>{children}</TimelineContext.Provider>
  );
};

export function useTimeline() {
  const context = useContext(TimelineContext);

  return context;
}
