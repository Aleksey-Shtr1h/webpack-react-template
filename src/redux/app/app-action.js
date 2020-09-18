export const ActionTypeApp = {
  INCREMENT: `INCREMENT`,
  DECREMENT: `DECREMENT`,
};

export const ActionCreatorApp = {
  actionInc: (number) => {
    return {
      type: ActionTypeApp.INCREMENT,
      payload: number + 1,
    };
  },

  actionDec: (number) => {
    return {
      type: ActionTypeApp.DECREMENT,
      payload: number - 1,
    };
  },
};
