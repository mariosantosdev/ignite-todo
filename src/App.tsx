import { Box, Flex } from "@chakra-ui/react";
import { Header } from "~/components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <Flex flexDir="column" mb={4}>
      <Header />

      <Box as="main" px={2}>
        <NewTask />

        <TaskList />
      </Box>
    </Flex>
  );
}

export default App;
