interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>디테일 페이지</h1>
      <h2>{params.id}</h2>
    </div>
  );
}
