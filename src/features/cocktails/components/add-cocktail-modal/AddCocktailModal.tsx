import { Button, Input, Modal, ModalProps } from "../../../../components";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useCocktailStore } from "../../store";
import classes from "./AddCocktailModal.module.css";
import { v4 as uuid } from "uuid";

type AddCocktailModalProps = {} & Omit<ModalProps, "children">;

type Form = {
  name: string;
  ingredients: string[];
  instructions: string;
};

export const AddCocktailModal = ({
  isOpen,
  onClose,
}: AddCocktailModalProps) => {
  if (!isOpen) return null;
  const { saveCocktail } = useCocktailStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      name: "",
      ingredients: ["Ingredient..."],
      instructions: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
    rules: {
      minLength: 1,
    },
    shouldUnregister: false,
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    const ingredients = data.ingredients.reduce(
      (acc, item, index) => ({
        ...acc,
        [`strIngredient${index}`]: item,
      }),
      {}
    );

    const trasnformedData = {
      idDrink: uuid(),
      strDrink: data.name,
      strInstructions: data.instructions,
      strDrinkThumb: "https://picsum.photos/700",
      ...ingredients,
    };

    saveCocktail(trasnformedData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Name</h3>
          <Input
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
            placeholder="Enter name"
            label="Name"
          />
          {errors.name?.message && (
            <span className={classes.error}>{errors.name?.message}</span>
          )}
        </div>
        <div>
          <h3>Ingredients</h3>
          <div className={classes.addIngredientButtonContainer}>
            <Button
              type="button"
              onClick={() => {
                append("Ingredient...");
              }}
            >
              Add Ingredient
            </Button>
          </div>
          <div className={classes.addIngredientsContainer}>
            {fields.map((ing, index) => {
              return (
                <div
                  key={`${ing.id}_${index}`}
                  className={classes.ingredientInput}
                >
                  <div>
                    <Input
                      {...register(`ingredients.${index}`, {
                        required: {
                          value: true,
                          message: "Ingredient is required",
                        },
                      })}
                      label={`Ingredint ${index + 1}`}
                      placeholder={`Ingredient ${index + 1}`}
                    />
                    {errors.ingredients?.[index]?.message && (
                      <span className={classes.error}>
                        {errors.ingredients?.[index]?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Button
                      disabled={fields.length === 1}
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.instructionsContainer}>
          <h3>Instructions</h3>
          <textarea
            rows={5}
            className={classes.textArea}
            {...register("instructions", {
              required: { value: true, message: "Instructions are required" },
            })}
          />
          {errors.instructions?.message && (
            <span className={classes.error}>
              {errors.instructions?.message}
            </span>
          )}
        </div>
        <div className={classes.actionsContainer}>
          <Button type="submit">Save</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </form>
    </Modal>
  );
};
