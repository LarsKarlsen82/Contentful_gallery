
const Gallery = ({ author }) => {
    return (
      <Wrapper background={gallery.avatar.file.url}>
        <TextContainer>
          <Title>{gallery.name}</Title>
          <Subtitle>{gallery.description}</Subtitle>
        </TextContainer>
      </Wrapper>
    );
  };

  export default Gallery;