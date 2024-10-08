'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import InfoBar from './_fragments/InfoBar/InfoBar';
import Input from './_fragments/Input/Input';
import Messages from './_fragments/Messages/Messages';
import io from 'socket.io-client';
import { styled } from 'styled-components';

const ENDPOINT = 'https://xenacious-terrijo-quantum-front-a81a7c54.koyeb.app/';

function Room({ params }) {
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>(searchParams.get('name') || '');
  const [profileId, setProfileId] = useState<string>(searchParams.get('profileId') || '');
  const [room, setRoom] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const newName = searchParams.get('name') || '';
    const profileId = searchParams.get('profileId') || '';
    const newRoom = searchParams.get('room') || '';

    if (newName !== name) setName(newName);
    if (newRoom !== room) setRoom(newRoom);
    if (newRoom !== room) setProfileId(profileId);
  }, [searchParams, params, name, room]);

  useEffect(() => {
    if (name && room) {
      const newSocket = io(ENDPOINT);
      setSocket(newSocket);

      newSocket.emit('join', { name, room, profileId }, (err: any) => {
        if (err) console.error('참가 오류:', err);
      });

      newSocket.on('message', (message: any) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      newSocket.on('roomData', ({ users }: { users: any[] }) => {
        setUsers(users);
      });

      return () => {
        newSocket.emit('userDisconnect');
        newSocket.off();
        newSocket.disconnect();
      };
    }
  }, [name, room]);

  const sendMessage = useCallback(() => {
    if ((file || message) && socket) {
      socket.emit('sendMessage', { message, file }, () => {
        setMessage('');
        setFile(null);
      });
    } else {
      console.warn('No message or file to send, or socket is not connected.');
    }
  }, [message, file, socket]);

  return (
    <ChatContainer>
      <InfoBar roomName={room} users={users} />
      <Messages messages={messages} name={name} />
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} setFile={setFile} />
    </ChatContainer>
  );
}

export default Room;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow: hidden;
  width: 100%;
`;
