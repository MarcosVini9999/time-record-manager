import { IUserTimes } from "@/components/Layout/Layout";
import { useOutletContext } from "react-router-dom";

interface OutletContextProps {
  userTimes: IUserTimes;
  fetchData: (token: string) => IUserTimes;
}

export const DashboardPage = () => {
  const { userTimes }: OutletContextProps = useOutletContext();

  return (
    <>
      {userTimes.registeredTime?.map((time, index) => (
        <div key={index}>
          <h1>{index}</h1>
          <h1>{time.user.name}</h1>
          <h1>{time.created_at}</h1>
        </div>
      ))}
    </>
  );
};
