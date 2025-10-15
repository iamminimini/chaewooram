import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import * as Style from './InfoBarStyle';

function InfoBar({ roomName, users }) {
  return (
    <Style.InfoContainer>
      <Style.TitleWrapper>
        <Style.ChatIconWrapper>
          <ChatIcon />
        </Style.ChatIconWrapper>
        <Style.TitleContent>
          <Style.TitleText>{roomName}</Style.TitleText>
          <Style.UserCount>
            <PeopleIcon />
            <span>{users?.length || 0}명 참여</span>
          </Style.UserCount>
        </Style.TitleContent>
      </Style.TitleWrapper>
      <Style.BackButton href={`/chat`}>
        <ArrowBackIcon />
      </Style.BackButton>
    </Style.InfoContainer>
  );
}

export default InfoBar;
