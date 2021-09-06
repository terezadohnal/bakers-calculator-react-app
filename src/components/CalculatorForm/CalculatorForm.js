import classes from "./CalculatorForm.module.css";

const CalculatorForm = (props) => {
  return (
    <form className={classes.calculatorForm}>
      <h2>Calculator</h2>
      <div>
        <div>
          <label htmlFor="loafWeight">Weight of one loaf:</label>
          <input type="text" id="loafWeight" />
        </div>
        <div>
          <label htmlFor="loafCount">How many loaves you want to bake?</label>
          <input type="text" id="loafCount" />
        </div>
      </div>
      <h2>Ingredients</h2>
      <div>
        <div className={classes.ingredientsForm}>
          <div className={classes.ingredientsControl}>
            <label htmlFor="ingredient-1">1. Ingredient</label>
            <input type="text" id="ingredient-1" />
          </div>
          <div className={classes.ingredientsFormPercentage}>
            <input type="number" min="0" max="100" id="percentage-1" />
            <label htmlFor="percentage-1">%</label>
          </div>
        </div>
        <div className={classes.ingredientsForm}>
          <div className={classes.ingredientsControl}>
            <label htmlFor="ingredient-2">2. Ingredient</label>
            <input type="text" id="ingredient-2" />
          </div>
          <div className={classes.ingredientsFormPercentage}>
            <input type="number" min="0" max="100" id="percentage-2" />
            <label htmlFor="percentage-2">%</label>
          </div>
        </div>
        <div className={classes.ingredientsForm}>
          <div className={classes.ingredientsControl}>
            <label htmlFor="ingredient-3">3. Ingredient</label>
            <input type="text" id="ingredient-3" />
          </div>
          <div className={classes.ingredientsFormPercentage}>
            <input type="number" min="0" max="100" id="percentage-3" />
            <label htmlFor="percentage-3">%</label>
          </div>
        </div>
      </div>
      <button type="button">Add Ingredient</button>
      <button type="submit">Calculate the recipe</button>
    </form>
  );
};

export default CalculatorForm;
