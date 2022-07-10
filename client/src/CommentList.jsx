import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    const content = new Map([
      ['approved', comment.content],
      ['pending', 'This comment is awaiting moderation'],
      ['rejected', 'This comment has been rejected']
    ]).get(comment.status);

    return <li key={comment.id}>{ content }</li>
  });

  return <ul>{renderedComments}</ul>;
}
