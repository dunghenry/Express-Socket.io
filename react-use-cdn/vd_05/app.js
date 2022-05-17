const root = document.getElementById("root");

const Header = () => {
  return (
    <div>
      <h1>Header Component</h1>
    </div>
  );
};
class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Content Component</h1>
      </div>
    );
  }
}
// const PostItem = (props) => {
//     console.log(props)
//     return (
//         <div className="post-item">
//             <img src={props.image} />
//             <h2 className="post-title">{ props.title }</h2>
//             <p className="post-description">{ props.description }</p>
//             <p className="post-published">{ props.publishedAt }</p>
//         </div>
//     )
// }
const log = (number) => {
  console.log(number);
};
const PostItem = ({
  title,
  description,
  publishedAt,
  image,
  data: [courseOne, courseTwo],
  callback = () => {},
}) => {
  if (typeof callback === "function") {
    console.log(callback);
    callback(Math.floor(Math.random() * 1000));
  }
  return (
    <div className="post-item">
      <img src={image} />
      <h2 className="post-title">{title}</h2>
      <p className="post-description">{description}</p>
      <p className="post-published">{publishedAt}</p>
    </div>
  );
};
const App = () => {
  return (
    <React.Fragment>
      <PostItem
        title="ReactJS with Typescript [Series]. Phần 1 Basic Typescript"
        image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3523/62807a229e33b.png"
        description="Mình có đọc qua vài bình luận ở dưới một số video trong khóa JS cơ bản và thấy một số bạn muốn có thêm bài tập thực hành..."
        publishedAt="Một ngày trước . 5 phút đọc"
        data={[
          { id: 1, courseName: "JavaScript" },
          { id: 1, courseName: "PHP" },
        ]}
        callback={(number) => log(number)}
      />
      <PostItem
        title="ReactJS with Typescript [Series]. Phần 1 Basic Typescript"
        image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3523/62807a229e33b.png"
        description="Mình có đọc qua vài bình luận ở dưới một số video trong khóa JS cơ bản và thấy một số bạn muốn có thêm bài tập thực hành..."
        publishedAt="Một ngày trước . 5 phút đọc"
        data={[
          { id: 1, courseName: "JavaScript" },
          { id: 1, courseName: "PHP" },
        ]}
      />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, root);
