
export interface User {
  id: number;
  tag: string; // unique
  fullName: string;
  role: 'common' | 'admin' | 'staff';
}
