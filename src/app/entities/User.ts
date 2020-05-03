
export interface User {
  id: number;
  tag: string; // unique
  fullname: string;
  role: 'common' | 'admin' | 'staff';
}
