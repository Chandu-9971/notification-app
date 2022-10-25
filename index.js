const Notification = (props) => {
  //  Write your code here.
  const { className, ImagePic } = props;
  return (
    <div>
      <image className="{className}">{ImagePic}</image>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <div className="container">
      <h1 className="main-heading">Notifications</h1>
      <div className="bg-container">
        <Paragraph
          paragraphText="Information Message"
          className="information-text"
        />
        <Paragraph paragraphText="Success Message" className="success-text" />
        <Paragraph paragraphText="Warning Message" className="warming-text" />
        <Paragraph paragraphText="Error Message" className="error-text" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
