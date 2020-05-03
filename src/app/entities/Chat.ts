import { User } from '@app/entities/User';

export interface Chat {
  users: User[];
  messages?: Message[] & ResponseMessage[] & QuestionMessage[];
}

export interface Message {
  id: string;
  sender: User | string;
  content: string;
  type: 'normal' | 'response' | 'question';
}

export interface ResponseMessage extends Message {
  message_quoted: Message | string;
}

export interface QuestionMessage extends Message {
  // answered: boolean; // if a question is answered or not
  score: number;
}
