
export interface User {
    username: string;
    password: string;
  }
  
  export interface Properties {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  }
  

 export interface UserModalProps {
    user: User | null;
    onClose: () => void;
  }

  export type Advice = {
    minScore: number;
    maxScore: number;
    severity: string;
    recommendation: string;
  };

 export interface Question {
    category: string;
    description?: string;
    ratings: { label: string; score: number }[];
  }