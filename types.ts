
export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  category: 'LAW' | 'BTECH' | 'CODING' | 'ENTRANCE';
  points: string[];
  link: string;
  icon: string;
  badge?: string;
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
