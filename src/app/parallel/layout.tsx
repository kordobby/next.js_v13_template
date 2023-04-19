import Link from 'next/link';

const PokemonNav = () => {
  return <nav></nav>;
};

const HogwartNav = () => {
  return <nav></nav>;
};

const Layout = ({
  children,
  pokemon,
  hogwarts,
}: {
  children: React.ReactNode;
  pokemon: React.ReactNode;
  hogwarts: React.ReactNode;
}) => {
  return (
    <div className="card">
      <h1>Parallel Routing</h1>
      {children}
      <h2>🍓 Pokemon Slot</h2>
      <PokemonNav />
      {pokemon}

      <h2>🍋 Hogwarts Slot</h2>
      <HogwartNav />
      {hogwarts}
    </div>
  );
};

export default Layout;
