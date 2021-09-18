import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import DateInput from "./dateJS";
import { ChatController, MuiChat } from "chat-ui-react";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

function AppC() {
  const [chatCtl] = React.useState(new ChatController());

  React.useMemo(async () => {
    // Chat content is displayed using ChatController
    await chatCtl.addMessage({
      type: "text",
      content: `Hello, What's your name.`,
      self: false
    });
    chatCtl.setActionRequest({ type: "text", always: true }, (response) => {
      if (response.value !== "4")
        chatCtl.addMessage({
          type: "text",
          content: `Hi ${response.value}`,
          self: false
        });
      else if (response.value === "4") {
        chatCtl.addMessage({
          type: "text",
          content: `Bye`,
          self: false
        });
        chatCtl.cancelActionRequest();
        (async () => {
          const custom = await chatCtl.setActionRequest({
            type: "custom",
            Component: DateInput
          });
          chatCtl.addMessage({
            type: "text",
            content: String(custom.date.year),
            self: false
          });
        })();
      }
    });
  }, [chatCtl]);

  // Only one component used for display
  return (
    <Container maxWidth="lg">
      <MuiChat chatController={chatCtl} />
    </Container>
  );
}
ReactDOM.render(<AppC />, document.querySelector("#app"));
