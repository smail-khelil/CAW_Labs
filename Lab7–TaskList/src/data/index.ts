import { IStatus, ITask, InputForm } from "../assets/interface/ITask";

export const statusList: IStatus[] = [
  {
    id: 1,
    nameS: "Waiting",
    statusImg:
      "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-54643.jpg",
  },
  {
    id: 2,
    nameS: "In Progress",
    statusImg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEX/XgA92nntAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
  },
  {
    id: 3,
    nameS: "Completed",
    statusImg:
      "https://img.freepik.com/premium-photo/abstract-mint-green-gradient-background-empty-space-studio-room-display-product_8466-17.jpg",
  },
  {
    id: 4,
    nameS: "Canceled",
    statusImg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  },
];

export const ListForm: InputForm[] = [
  {
    id: "title",
    name: "title",
    label: "title Product",
    type: "text",
    placeholder: "Enter title task",
  },

  {
    id: "id description",
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
  },
];

export const listTasksdef: ITask[] = [
  {
    id: "1",
    title: "Task 1 test",
    description: "Description 1",
    status: statusList[0],
  },
];
