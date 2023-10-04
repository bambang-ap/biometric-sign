import * as React from 'react';

import {UserBubbles} from '@appComp/UserBubbles';
import {useListUsers} from '@query';

export default function ChatsScreen() {
  const {data} = useListUsers();

  return <UserBubbles users={data?.data.data ?? []} />;
}
