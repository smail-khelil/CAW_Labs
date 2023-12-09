export interface ITask {
  id?: string;
  title: string;
  description: string;
  status?: IStatus;
  subtasks?: ITask[];
}

export interface InputForm {
  id: string;
  name: "title" | "description" | "status";
  label: string;
  type: string;
  placeholder: string;
}

export interface IStatus {
  id: number;
  nameS: string;
  statusImg?: string;
}
