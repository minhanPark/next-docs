import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getUsers();
  return (
    <div>
      {data.map((user: any) => (
        <div key={user.id} className="mb-2">
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          <h4>
            <Link href={`/detail/${user.id}`}>이동하기</Link>
          </h4>
          <hr className=" border border-red-500" />
        </div>
      ))}
    </div>
  );
}
