import { User } from '@app/entities/User';

export interface Chat {
  users?: User[];
  messages?: Message[];
}

export interface Message {
  id: string;
  sender: User | string;
  content: string;
  type: string;
}

export interface ResponseMessage extends Message {
  quoted: Message;
}

export interface QuestionMessage extends Message {
  // answered: boolean; // if a question is answered or not
  score: number;
}
