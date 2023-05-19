interface PageProps {
  params: {
    id: string;
  };
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data!!!!");
  }
  return res.json();
}

export default async function Page({ params }: PageProps) {
  const data = await getUser(params.id);

  return (
    <div>
      <h1>디테일 페이지</h1>
      <h2>
        <strong>{data.id}</strong>: {data.name}
      </h2>
      <h3>{data.username}</h3>
      <h3>{data.email}</h3>
      <h3>{data.phone}</h3>
    </div>
  );
}
