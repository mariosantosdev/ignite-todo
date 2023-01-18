import { Flex } from "@chakra-ui/react";
import { useTask } from "~/context/TaskContext";
import { Task } from "./Task";

export const TaskList: React.FC = () => {
  const { tasks } = useTask();

  return (
    <Flex
      flexDir="column"
      gap={2}
      maxW="container.sm"
      w="full"
      mx="auto"
      mt={12}
    >
      {tasks.map(({ id, title, done }) => (
        <Task key={id} id={id} title={title} done={done} />
      ))}
    </Flex>
  );
};
