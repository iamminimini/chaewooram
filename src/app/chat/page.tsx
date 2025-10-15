'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CreateJoinChatModal from '@/components/chat/CreateJoinChatModal';
import Container from '@/components/common/Container';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Error from '@mui/icons-material/Error';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import io from 'socket.io-client';
import { styled } from 'styled-components';
import { ModalType, RoomsState } from './chatType';

// Constants for socket endpoint
const ENDPOINT = 'https://xenacious-terrijo-quantum-front-a81a7c54.koyeb.app/';
const socket = io(ENDPOINT);

function Join() {
  const [rooms, setRooms] = useState<RoomsState>({});
  const [modalType, setModalType] = useState<ModalType>(undefined);
  const [entryRoom, setEntryRoom] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 서버에서 방 목록이 업데이트될 때 클라이언트의 방 목록을 최신 상태로 유지하기 위한 이벤트
    socket.on('roomListUpdate', fetchGetRoomsData);
    // 클라이언트가 서버에 현재 방 목록을 요청하여 방 목록을 가져오기 위한 이벤트
    socket.on('getRooms', fetchGetRoomsData);

    // 방 목록을 서버에서 가져오기
    fetchGetRoomsData();

    return () => {
      socket.off('roomListUpdate', fetchGetRoomsData);
      socket.off('getRooms', fetchGetRoomsData);
    };
  }, []);

  const fetchGetRoomsData = () => {
    // 서버에 방 목록 요청을 보내고 응답받은 방 목록으로 클라이언트 상태 업데이트
    setTimeout(() => {
      socket.emit('getRooms', (response: RoomsState) => setRooms(response));
    }, 1000);
  };

  const handleCloseCallback = () => {
    entryRoom && setEntryRoom('');
    setModalType(undefined);
  };

  const handleSubmitCallBack = ({ room, name, profileId }) => {
    if (modalType === ModalType.ROOM_CREATE) {
      socket.emit('createRoom', room, () => {});
    }

    router.push(`/chat/room?room=${room}&name=${name}&profileId=${profileId}`);
  };
  return (
    <Container
      title="채팅"
      rightContent={
        <>
          <CreateRoomButton onClick={() => setModalType(ModalType.ROOM_CREATE)}>
            <AddCommentIcon />
            <span>새로운 방 생성</span>
          </CreateRoomButton>
          <IconButton onClick={fetchGetRoomsData} color="primary">
            <RefreshIcon />
          </IconButton>
        </>
      }
    >
      {Object.keys(rooms).length === 0 ? (
        // 방 목록이 없을 때 표시할 메시지

        <NoRoomsMessage>
          <Error />
          현재 방이 없습니다. 방을 새로 생성해 주세요.
        </NoRoomsMessage>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 2,
          }}
        >
          {Object.keys(rooms).map((room) => (
            <StyledCard key={room}>
              <StyledCardContent>
                <CardTopRow>
                  <RoomTitle sx={{ fontSize: 18 }} gutterBottom>
                    {decodeURIComponent(room)}
                  </RoomTitle>
                  <UserCountBadge>
                    <PeopleAltOutlinedIcon />
                    <span>{rooms[room]?.users.length || 0}</span>
                  </UserCountBadge>
                </CardTopRow>
                <Typography variant="body2">방장: {rooms[room]?.users[0]?.name}</Typography>
              </StyledCardContent>
              <StyledCardActions>
                <JoinButton
                  onClick={() => {
                    setEntryRoom(room);
                    setModalType(ModalType.ROOM_ENTRY);
                  }}
                >
                  참여하기
                </JoinButton>
              </StyledCardActions>
            </StyledCard>
          ))}
        </Box>
      )}

      <CreateJoinChatModal
        modalType={modalType}
        entryRoom={entryRoom}
        handleCloseCallback={handleCloseCallback}
        handleSubmitCallBack={handleSubmitCallBack}
      />
    </Container>
  );
}

export default Join;

const RoomTitle = styled(Typography)`
  span {
    font-size: 14px;
    margin-left: 5px;
    color: #777;
  }
`;

const NoRoomsMessage = styled.div`
  font-weight: 400;
  height: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 14px;
    color: #333;
  }
`;

const CreateRoomButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2979ff;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 8px 14px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(41, 121, 255, 0.3);
  transition:
    background 0.2s ease,
    transform 0.1s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #2962ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 121, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
    background: #1e53e5;
  }

  svg {
    font-size: 18px;
  }
`;

const JoinButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;

  &:hover {
    border-color: #2979ff;
    box-shadow: 0 2px 8px rgba(41, 121, 255, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledCard = styled(Card)`
  border-radius: 14px;
  border: 1px solid #eee;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.12s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #e5e7eb;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px 16px 8px 16px !important;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px 12px 12px !important;
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const UserCountBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 9999px;
  background: #f1f5ff;
  color: #1e53e5;
  border: 1px solid #d9e5ff;

  svg {
    font-size: 18px;
  }

  span {
    font-size: 13px;
    font-weight: 600;
  }
`;
