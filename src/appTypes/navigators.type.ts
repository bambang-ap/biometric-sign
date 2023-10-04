import {TNotes} from './app.zod';

export enum RootStackList {
  Auth = 'Auth',
  Notes = 'Notes',
  NoteDetail = 'NoteDetail',
}

export enum MenuList {
  Chats = 'Chats',
  Status = 'Status',
  Calls = 'Calls',
}

export type RootStackParamList = {
  [RootStackList.Auth]: undefined;
  [RootStackList.Notes]: undefined;
  [RootStackList.NoteDetail]: TNotes;
};
