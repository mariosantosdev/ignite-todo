import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "~/services/theme";
import { TaskProvider } from "~/context/TaskContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ChakraProvider>
  </React.StrictMode>
);
