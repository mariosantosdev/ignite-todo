import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import { useTask } from "~/context/TaskContext";

interface TaskProps {
  id: string;
  title: string;
  done: boolean;
}

export const Task: React.FC<TaskProps> = ({ id, title, done }) => {
  const { removeTask, toggleTask } = useTask();
  return (
    <Flex
      flexDir="row"
      alignItems="flex-start"
      w="full"
      p="12px"
      bg="gray.500"
      border="solid"
      borderWidth="1px"
      borderColor="gray.400"
      rounded="lg"
      dropShadow="sm"
      gap={4}
    >
      <Checkbox
        alignSelf="flex-start"
        variant="circular"
        colorScheme="purple"
        checked={done}
        onChange={() => toggleTask(id)}
      />

      <Text
        wordBreak="break-word"
        maxW="80%"
        textDecorationLine={done ? "line-through" : "none"}
      >
        {title}
      </Text>

      <IconButton
        ml="auto"
        aria-label="Deletar task"
        icon={<DeleteIcon />}
        variant="ghost"
        _hover={{ color: "danger" }}
        onClick={() => {
          if (confirm("Tem certeza que deseja deletar esta tarefa?"))
            removeTask(id);
        }}
      />
    </Flex>
  );
};
