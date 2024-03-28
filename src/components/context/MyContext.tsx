import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction } from 'react';

export interface MyContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

function Provider(props: PropsWithChildren<unknown>) {
  const [count, setCount] = useState<number>(0);
  const contextValue: MyContextType = { count, setCount };

  return <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>;
}

export { Provider };
export default MyContext;
