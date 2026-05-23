import { SelectItem } from '@radix-ui/react-select';

export const DEPARTMENTS = [
    'CS',
  'Math',
  'English'
];


export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept
}))