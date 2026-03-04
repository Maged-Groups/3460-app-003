const response = await fetch("https://dummyjson.com/recipes");
console.log('response', response);

let data;
if (response.status === 200) {
  data = await response.json();
  console.log('data',data)
}


export default function Card({ title }) {

  const foundRecipe = data?.recipes?.find(recipe => recipe.name === title);

  console.log('foundRecipe', foundRecipe)
  if (!foundRecipe) return (
    <div className="text-2xl p-3 rounded-md border border-yellow-800 bg-yellow-200 text-yellow-600 font-bold">
      No Recipes match your search!!!
    </div>
  )

  return (<div className="bg-gray-100">
    <div
      className="flex flex-1 bg-gray-100
    flex-wrap "
    >
      <div className=" bg-white m-8 overflow-auto h-96 w-80 px-10 py-2 rounded-xl content-between">
        <img
          className=" w-80 rounded-4xl "
          src={foundRecipe.image}
          alt="Classic Margherita Pizza"
        />
        <h1 className="">{foundRecipe.name}</h1>
        <h1 className="text-amber-500">Ingredients</h1>
        <ul className="">
          {foundRecipe.ingredients.map(
            (cardnameing) => (
              <li
                className="  rounded-md my-2  text-teal-500"
                key={`${Math.random()}`}
              >{`🍕${cardnameing}`}</li>
            ),
          )}
        </ul>
        <hr />
        <ul className="">
          {foundRecipe.instructions.map(
            (step) => (
              <li
                className="  rounded-md my-2  text-teal-500"
                key={`${Math.random()}`}
              >{`🍽${step}`}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  </div>
  );
}
