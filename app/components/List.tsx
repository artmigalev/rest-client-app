import { Link, type Path } from 'react-router';



type stylesList = {

  classItems?: string
  classList: string
  stylesForLinks?:string
  stylesForBtn?:string


}

interface IList<T> {
  items: [key: T, string][] | string[];
  styles?: stylesList;
  callbackFn?: () => void | undefined;
  returnedTypeItems: 'links' | 'btn' | '';
}

function List<T>({ items, styles, callbackFn, returnedTypeItems }: IList<T>) {


  let children;
  switch (returnedTypeItems as IList<T>['returnedTypeItems']) {
    case 'btn':
      children = items.map((item) => (
        <li  className={styles?.classItems} key={Date.now()}>
          <button className={`${styles?.stylesForBtn}  cursor-pointer`} type='button'>
            {item as string}
          </button>
        </li>
      ));
      break;
    case 'links':
      children = items.map(([key, val]) => (
        <li  className={styles?.classItems} key={key as string}>
          <Link id='link'
            className={`${styles?.stylesForLinks} capitalize w-max p-1`}
            to={key === 'logout' ? '/' : (key as Partial<Path>)}
            onClick={key === 'logout' ? callbackFn : undefined}
            viewTransition
          >
            {val as string}
          </Link>
        </li>
      ));
    default:
      break;
  }

  return <ul className={`w-full flex flex-row items-center ${styles?.classList}`}>{children}</ul>;
}

export default List;
