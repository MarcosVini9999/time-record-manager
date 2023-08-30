import { ITimes } from "@/components/Layout/Layout";
import { useOutletContext } from "react-router-dom";

export const TimeRecordPage = () => {
  const registeredTimes: ITimes[] = useOutletContext();

  return (
    <>
      <button>Botão</button>
      {registeredTimes?.map((time, index) => (
        <div key={index}>
          <h1>{index}</h1>
          <h1>{time.user.name}</h1>
          <h1>{time.created_at}</h1>
        </div>
      ))}
    </>
  );
};
