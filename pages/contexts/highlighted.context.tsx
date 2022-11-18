import { useContext, createContext } from 'react';
// import { createContext } from 'vm';

// create a new context
const HighlightedContext = createContext({
  highlighted: '',
  type: '',
});
const useHighlighted = () => useContext(HighlightedContext);

const HighlightedContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const highlighted = 'r1';
  const type = 'pin';

  return (
    <HighlightedContext.Provider
      value={{
        highlighted,
        type,
      }}
    >
      {children}
    </HighlightedContext.Provider>
  );
};

// export the context
export { useHighlighted, HighlightedContextProvider };
