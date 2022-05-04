export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'cycleBalance' : IDL.Func([], [IDL.Nat], ['query']) });
};
export const init = ({ IDL }) => { return []; };
