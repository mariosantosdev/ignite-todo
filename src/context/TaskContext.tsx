import { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

type Task = {
  id: string;
  title: string;
  done: boolean;
  created_at: Date;
};

interface TaskContextData {
  tasks: Task[];
  createTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback((title: string) => {
    const task: Task = {
      id: uuid(),
      title,
      done: false,
      created_at: new Date(),
    };

    setTasks((prev) => [...prev, task]);
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, removeTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
