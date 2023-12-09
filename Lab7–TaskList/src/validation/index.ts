/**
 * Validates a task object with the following properties:
 * - title: string
 * - price: string (representing a numeric value)
 * - description: string
 * - imageUrl: string (representing a valid URL for an image)
 *
 * @param task - The task object to be validated.
 * @returns An object containing error messages for each property, if any.
 *          An empty object means the validation passed successfully.
 */
export const taskvalidation = (task: {
  title: string;
  description: string;
}) => {
  const errorMsg: {
    title: string;

    description: string;
  } = {
    title: "", // Error message for the title property

    description: "", // Error message for the description property
  };

  if (!task.title.trim() || task.title.length < 3 || task.title.length > 40) {
    errorMsg.title = "Title must be between 3 and 40 characters";
  }

  if (!task.description.trim() || task.description.length < 5) {
    errorMsg.description = "Must descriptor the task ";
  }

  return errorMsg;
};
