type HandleChange = {
  state?: any;

  setState: Function;
};

export const useHandleChange =
  ({ state, setState }: HandleChange) =>
  (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
