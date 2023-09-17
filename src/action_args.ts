export type ActionArgs = {
  projectId: string;
  callableId: string;
  apiKey: string;
  version?: string;
  inputArgs?: object[];
  config?: object;
  blocking?: boolean;
};
