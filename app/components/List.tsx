import { Link, type Path } from 'react-router';

interface IList<T> {
  items: [key: T, string][];
  isLink: boolean;
  styles?: string;
  callbackFn?: () => void | undefined;
}

function List<T>({ items, isLink, styles, callbackFn }: IList<T>) {
  const children = items.map(([key, val]) => (
    <li key={key as string}>
      {isLink ? (
        <Link
          className='capitalize w-max p-1'
          to={key === 'logout' ? '/' : (key as Partial<Path>)}
          onClick={key === 'logout' ? callbackFn : undefined}
          viewTransition
        >
          {val}
        </Link>
      ) : (
        <span>{val as string}</span>
      )}
    </li>
  ));

  return <ul className={`w-full flex flex-row items-center ${styles}`}>{children}</ul>;
}

export default List;
