export default function Header() {
  return (
    <header className="bg-white w-full px-8 py-6 shadow fixed top-0 left-0 z-10">
      <nav className="text-neutral-900 max-w-7xl mx-auto flex justify-center">
        <div>
          <h1 className="self-center text-3xl text-center font-bold">UNIFOR CI/CD</h1>
          <p>Sistema de controle de estoque</p>
        </div>
      </nav>
    </header>
  );
}
