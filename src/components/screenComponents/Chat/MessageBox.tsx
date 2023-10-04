import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {useForm} from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import {queryClient} from 'src/App';

import {TChat} from '@appTypes/data.type';
import {Input} from '@components';
import {Icon} from '@components';
import {EUserType} from '@constants/enum.const';
import {useListChats, useMutateNewChat} from '@query';

export default function MessageBox() {
  const {mutate} = useMutateNewChat();
  const {data, queryKey} = useListChats();
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {message: ''},
  });

  const submit = handleSubmit(({message}) => {
    if (message) {
      pushNewMessage(message);
      reset();
      mutate(message, {
        onSuccess(response) {
          Toast.show(`${response.data.message} : ${message}`, Toast.BOTTOM);
        },
      });
    }
  });

  function pushNewMessage(message: string) {
    /**
     * NOTE:
     * I prefer use optimistic update, so i don't need to wait response after mutation
     */
    queryClient.setQueryData<typeof data>(queryKey, oldData => {
      const newPages = oldData?.pages.map((page, index) => {
        if (index === 0) {
          const {data: axiosData, ...restPage} = page;
          const {data: responseData, ...restData} = axiosData;
          const {data: chats, ...restResponse} = responseData;

          const newChat: TChat = {
            message,
            isYou: true,
            type: EUserType.P,
            id: Math.randomInt(1000, 9999).toString(),
          };

          return {
            ...restPage,
            data: {
              ...restData,
              data: {
                ...restResponse,
                data: [newChat, ...chats],
              },
            },
          };
        }
        return page;
      });

      return {pageParams: oldData?.pageParams!, pages: newPages!};
    });
  }

  return (
    <View className="flex-row items-end gap-2 py-2">
      <View className="min-h-[40px] max-h-24 justify-center px-4 py-2 rounded-3xl flex-1 bg-gray-300">
        <Input control={control} fieldName="message" multiline />
      </View>
      <TouchableOpacity
        onPress={submit}
        className="rounded-3xl h-[40px] w-[40px] items-center justify-center bg-green-700 p-2">
        <Icon className="text-white" name="paper-plane" />
      </TouchableOpacity>
    </View>
  );
}
