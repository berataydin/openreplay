import BottomBlock from './BottomBlock';
import Header from './Header';
import Content from './Content';

BottomBlock.Header = Header;
BottomBlock.Content = Content;

export default BottomBlock as typeof BottomBlock & {
  Header: typeof Header;
  Content: typeof Content;
};
