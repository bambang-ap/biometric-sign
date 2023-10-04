import * as React from 'react';

import AppScreen from '@appComp/AppScreen';
import {MessagesRef} from '@appTypes/propsType.type';
import ChatHeader from '@screenComp/Chat/ChatHeader';
import MessageBox from '@screenComp/Chat/MessageBox';
import Messages from '@screenComp/Chat/Messages';

export default function ChatScreen() {
  const ref = React.useRef<MessagesRef>(null);

  /**
   * NOTE:
   * IDK if I remove the code bellow, I can't jump to next message at search
   */
  console.log(ref.current?.scrollToIndex);

  return (
    <AppScreen>
      <ChatHeader scrollToIndex={ref.current?.scrollToIndex} />
      <Messages ref={ref} />
      <MessageBox />
    </AppScreen>
  );
}
