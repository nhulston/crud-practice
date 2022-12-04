import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const BlogPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
`;

const BlogTitle = styled.h3`
  padding: 40px 0 20px;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const BlogBody = styled.p`
  font-size: 20px;
  padding: 0 40px;
  margin: 0 0 20px 0;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px auto;
`;

const Action = styled.button`
  font-size: 18px;
  color: ${props => props.red ? '#ff0000' : '#0070F3'};;
  cursor: pointer;
  margin: 0 30px 0 0;
  padding: 0;
  border: none;
  background: none;
`;

function BlogList(props) {
    if (props.list.length === 0) {
        return (
            <Wrapper>
                <h1>No blogs found.</h1>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            {props.list.map((val, key) => {
                const body = val.body;
                if (body.length > 200) {
                    val.body = body.substring(0, 200) + "...";
                }
                return (
                    <BlogPreviewWrapper key={key}>
                        <BlogTitle>{val.title}</BlogTitle>
                        <BlogBody>{body}</BlogBody>
                        <ActionsWrapper>
                            <Action onClick={() => {
                                document.location.href="/edit/" + val.id;
                            }
                            }>Edit</Action>
                            <Action red onClick={() => {
                                props.onDelete(val.id);
                            }}>Delete</Action>
                        </ActionsWrapper>
                    </BlogPreviewWrapper>
                );
            })}
        </Wrapper>
    );
}

export default BlogList;