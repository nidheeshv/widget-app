export interface globalStateI {
  values: any;
  widgets: widgetI[];
}
export interface widgetI {
  name: string;
  value: string;
  type: string;
}
