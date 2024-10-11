import { Avatar, Text } from '@chakra-ui/react';
import CommonContainer from '@/components/common/layouts/Container';

type Props = {
  username: string;
  imageURL: string;
  size?: string;
}

const CommonAvatar = ({ username, imageURL, size }: Props) => {
  return (
    <CommonContainer
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Avatar
        name={username}
        src={imageURL}
        size={size}
      />
      <Text
        fontSize={size}
        ml="1rem"
      >{username}</Text>
    </CommonContainer>
  )
}

export default CommonAvatar;
