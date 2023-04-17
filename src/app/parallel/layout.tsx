const PokemonNav = () => {
  return <nav>pokemon tab</nav>;
};

const HogwartNav = () => {
  return <nav>hogwart tab</nav>;
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
    <div>
      <h1>This is Parallel Page</h1>
      {children}
      <h2>Pokemon</h2>
      <PokemonNav />
      {pokemon}

      <h2>Hogwarts</h2>
      <HogwartNav />
      {hogwarts}
    </div>
  );
};

export default Layout;
