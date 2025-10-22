import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

interface IList<T> {
  items: [T, string][];
  isLink: boolean;
  styles?: string;
}

function List({ items, isLink, styles }: IList<string>) {

  const children = items.map(([key, val]) => (
    <li key={key}>
      {isLink ? (
        <Link className='capitalize' to={key} viewTransition>
          {key}
        </Link>
      ) : (
        <span>{val}</span>
      )}
    </li>
  ));

  return <ul className={`w-full flex flex-row items-center ${styles}`}>{children}</ul>;
}

export default List;
