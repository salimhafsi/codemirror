export const role = {
  name: 'manager',
  permission: 'admin',
};
export const user = {
  firstName: 'salim',
  lastName: 'hafsi',
  adress: 'tunis',
  age: 30,
  firstJob: 'developper',
  role: role,
} as any;

export const numberOperators = {
  greater: '>',
  less: '<',
  greaterOrEqual: '>=',
  lessOrEqual: '<=',
  equal: '==',
  different: '!=',
};
export const stringOperator = {
  and: 'AND',
  contains: 'CONTAINS',
  like: 'LIKE',
  not: 'NOT',
};
export interface model {
  firstName: string;
  lastName: string;
  adress: string;
}
