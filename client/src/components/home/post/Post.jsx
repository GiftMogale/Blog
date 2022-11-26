
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 7px 7px 7px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 10px;
    font-family: 'lucida grande', tahoma, verdana, arial, sans-serif
`;

const Heading = styled(Typography)`
    font-size: 17px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 15px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 
    
    return (
        <Container>
            <Image src={url} alt="post" />
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>{(post.subtitle)}</Text>
            <Text>Author: {post.email}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;