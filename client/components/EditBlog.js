import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const TitleInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 20px;
  text-align: center;
`;

const ContentInput = styled.textarea`
  width: 600px;
  height: 50px;
  font-size: 20px;
  font-family: inherit;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 50px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #0070F3;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background: #0555b0;
    transition: .5s;
  }
`;

function EditBlog(props) {
    return (
        <Wrapper>
            <Label>Blog Title</Label>
            <TitleInput type="text" placeholder="Enter Blog Title" value={props.title} onChange={props.onChangeTitle}/>
            <Label>Blog Body</Label>
            <ContentInput placeholder="Enter Blog Body" value={props.body} onChange={props.onChangeBody}/>
            <Button onClick={props.editPost}>Edit Post</Button>
        </Wrapper>
    );
}

export default EditBlog;