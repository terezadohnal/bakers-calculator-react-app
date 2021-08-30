import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <h3>🍞 Baker's calculator</h3>
      </div>
      <nav>
        <ul>
          <li>Recipes</li>
          <li>Calculator</li>
          <li>How to use</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
