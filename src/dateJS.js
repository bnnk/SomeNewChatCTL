import * as React from "react";

var DPicker = require("./DPicker").default;
console.log("Hello");
console.log(DPicker);

function DateInput({ chatController, actionRequest }) {
  const chatCtl = chatController;
  console.log(DPicker);
  const setResponse = React.useCallback(
    (date) => {
      const res = { type: "custom", value: date.toLocaleString(), date: date };
      chatCtl.setActionResponse(actionRequest, res);
    },
    [actionRequest, chatCtl]
  );

  return <DPicker onChoose={setResponse} />;
}
export default DateInput;
