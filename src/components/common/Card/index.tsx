import { Heading, Card, CardBody, Avatar, Flex, Text } from '@chakra-ui/react';
import CommonImage from '@/components/common/Image';


type Props = {
    maxWidth: string;
    imageURL: string;
    title?: string,
    content?: string,
    username: string,
    profileImage?: string,
} & React.HTMLAttributes<HTMLDivElement>

const CommonCard = ({ maxWidth, imageURL, title, content, profileImage ,username }: Props) => {
    return(
        <>
            <Card maxW={maxWidth}>
                <CardBody>
                    <CommonImage 
                        src={imageURL}
                        ratio={"square"}
                    />
                    <br/>
                    <Heading size='lg'>{title}</Heading>
                    <Text size="sm">{content}</Text>
                    <Flex gap='2'alignItems='center' justifyContent='flex-end' flexWrap='wrap'>
                        <Avatar size="sm" src={profileImage}/>
                        <Heading size="sm">{username}</Heading>
                    </Flex>
                </CardBody>
            </Card>
        </>

    )
}

export default CommonCard;