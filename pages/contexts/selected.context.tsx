import { useRouter } from 'next/router';
import { useContext, createContext, useState, useEffect } from 'react';
// import { createContext } from 'vm';

// create a new context
const SelectedContext = createContext({
  selected: '',
  type: '',
  updateSelected: (newSelected: string, newType: string) => {},
});
const useSelected = () => useContext(SelectedContext);

const SelectedContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const [selected, setSelected] = useState('');
  const [type, setType] = useState('board');

  useEffect(() => {
    setSelected('');
    setType('board');
  }, [router]);

  const updateSelected = (newSelected: string, newType: string) => {
    setSelected(newSelected);
    setType(newType);
  };

  return (
    <SelectedContext.Provider
      value={{
        selected,
        type,
        updateSelected,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

// export the context
export { useSelected, SelectedContextProvider };
