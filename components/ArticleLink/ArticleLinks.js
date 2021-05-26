import Styled from './ArticleLinks.styles';

export default function ArticleLinks({ fullWidth, zigZag, children }) {
  return (
    <Styled.ArticleLinks fullWidth={fullWidth} zigZag={zigZag}>
      {children}
    </Styled.ArticleLinks>
  );
}
