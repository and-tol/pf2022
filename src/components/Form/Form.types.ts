export interface IFormInputs {
  [Input.Name]: string;
  [Input.Subject]: string;
  [Input.Text]: string;
}

export enum Input {
  Name = 'name',
  Subject = 'subject',
  Text = 'text',
}
