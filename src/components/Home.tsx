import { useEffect, useState } from "react";

export const Home = ({ name, obj }: { name: string; obj: { k: number } }) => {
  const [data, setData] = useState<any[]>([]);
  const testVariable: string = "naman";

  async function apiCall() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await res.json();
    setData(usersData);
  }

  function ascending() {
    const asc = data.sort((a, b) => a.id - b.id);
    const ascCopy = [...asc];
    setData(ascCopy);
  }

  function descending() {
    const dsc = data.sort((a, b) => b.id - a.id);
    const dscCopy = [...dsc];
    setData(dscCopy);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <button onClick={ascending}>ascending</button>
      <button onClick={descending}>descending</button>
      {data?.map((d) => (
        <div key={d?.id}>{`${d?.id} ${d?.name}`}</div>
      ))}
    </div>
  );
};
