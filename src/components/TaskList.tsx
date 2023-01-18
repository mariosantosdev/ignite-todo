import { Badge, Flex, Text, VStack } from "@chakra-ui/react";
import { useTask } from "~/context/TaskContext";
import { Task } from "./Task";

export const TaskList: React.FC = () => {
  const { tasks, totalDoneTasks, totalTasks } = useTask();

  return (
    <Flex
      flexDir="column"
      gap={2}
      maxW="container.sm"
      w="full"
      mx="auto"
      mt={8}
    >
      <Flex
        flexDir={["column", "row"]}
        justifyContent={["flex-start", "space-between"]}
      >
        <Flex alignItems="center" gap={2}>
          <Text color="brand.blue" fontWeight="bold">
            Tarefas criadas
          </Text>
          <Badge rounded="full" px={2} bg="gray.400" color="gray.200">
            {totalTasks}
          </Badge>
        </Flex>

        <Flex alignItems="center" gap={2}>
          <Text color="brand.purple" fontWeight="bold">
            Concluídas
          </Text>
          <Badge rounded="full" px={2} bg="gray.400" color="gray.200">
            {totalDoneTasks} de {totalTasks}
          </Badge>
        </Flex>
      </Flex>

      <VStack mt={4} spacing="2">
        {tasks.map(({ id, title, done }) => (
          <Task key={id} id={id} title={title} done={done} />
        ))}
      </VStack>
    </Flex>
  );
};
