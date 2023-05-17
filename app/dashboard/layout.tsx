export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>대시보드 레이아웃</h1>
      </div>
      {children}
    </>
  );
}
