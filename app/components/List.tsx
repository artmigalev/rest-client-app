import React from 'react';
import { Link } from 'react-router';

interface IList<T> {
  items: [T, string][];
  isLink: boolean;
}

function List({ items, isLink }: IList<string>) {
  const children = items.map(
    ([key, val]) => (
      <li key={key}>
        {isLink ? <Link to={key}>{ val}</Link> : <span>{ val}</span>}
      </li>
    )
  )


  return <ul className='w-full flex flex-row items-center justify-between'>{children}</ul>;
}

export default List;
