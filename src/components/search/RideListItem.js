import React from 'react';
import { Link } from 'react-router-dom';

import { getFormattedDateText } from '../../utils';

const RideListItem = props => {
  const { article, user } = props;

  return (
    <div className="event mt12">
      <div className="content">
        <div className="summary">
          <Link to={{ pathname: `/articles/${article.id}`, user, article }}>
            {article.title}
          </Link>
          <div className="date">{article.customUser.name} on</div>
          <div className="date">{getFormattedDateText(article.createdAt)}</div>
        </div>
        <div className="extra">{article.content}</div>
        <div className="meta">
          <div className="like">{article.comments.length} comments</div>
        </div>
      </div>
    </div>
  );
};

export default RideListItem;
