import { IUserTimes } from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface OutletContextProps {
  userTimes: IUserTimes;
  fetchData: (token: string) => IUserTimes;
}

export const DashboardPage = () => {
  const { userTimes }: OutletContextProps = useOutletContext();
  const [userData, setUserData] = useState<IUserTimes>();

  useEffect(() => {
    setUserData(userTimes);
  }, [userTimes]);

  return (
    <>
      {userData?.registeredTime?.map((time, index) => (
        <div key={index}>
          <h1>{index}</h1>
          <h1>{time.user.name}</h1>
          <h1>{time.created_at}</h1>
        </div>
      ))}
      {}
    </>
  );
};
