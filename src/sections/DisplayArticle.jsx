import BigCard from '../components/BigCard';
import { usePosts } from '../context/postsContext';

const DisplayArticle = ({ post }) => {
  return (
    <div>
      <BigCard post={post} />
    </div>
  );
};

export default DisplayArticle;
