import classes from "./comment-list.module.css";

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>Sample comment one!</p>
        <div>
          By <address>Serengia</address>
        </div>
      </li>
      <li>
        <p>My second sample comment.</p>
        <div>
          By <address>James</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
