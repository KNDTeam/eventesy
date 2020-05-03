
export interface User {
  tag: string; // unique
  fullname: string;
  role: 'common' | 'admin' | 'staff';
}
