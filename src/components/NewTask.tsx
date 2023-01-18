import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useTask } from "~/context/TaskContext";

export const NewTask: React.FC = () => {
  const { createTask } = useTask();
  const toast = useToast();
  const [title, setTitle] = useState<string>("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !title.trim())
      return toast({
        title: "Erro",
        description: "Você precisa informar o título da tarefa",
        status: "error",
        position: "top",
        isClosable: true,
        duration: 3000,
      });

    toast.closeAll();
    toast({
      title: "Sucesso",
      description: "Tarefa criada com sucesso",
      status: "success",
      position: "top",
      isClosable: true,
      duration: 3000,
    });

    createTask(title);
    setTitle("");
  };

  return (
    <Box maxW="container.sm" w="full" mx="auto" mt="-6">
      <Stack
        as="form"
        onSubmit={onSubmit}
        spacing={[2, 4]}
        direction={["column", "row"]}
      >
        <Input
          placeholder="Adicione uma nova tarefa"
          bg="gray.500"
          _placeholder={{ color: "gray.300" }}
          w="full"
          border="solid"
          borderWidth="1px"
          borderColor="gray.700"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button
          type="submit"
          variant="blue-brand"
          rightIcon={<AddIcon fontSize={12} />}
        >
          Criar
        </Button>
      </Stack>
    </Box>
  );
};
