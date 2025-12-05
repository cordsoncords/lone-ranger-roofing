export interface FormData {
  zipCode: string;
  projectType: 'replace' | 'repair' | 'new-build' | '';
  timeframe: 'immediately' | '1-month' | '3-months' | '';
  homeowner: 'yes' | 'no' | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export type Step = 1 | 2 | 3 | 4;