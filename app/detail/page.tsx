async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("res", res.ok);
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
        </div>
      ))}
    </div>
  );
}
