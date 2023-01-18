import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

interface TaskContextData {
  tasks: Task[];
  totalDoneTasks: number;
  totalTasks: number;
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

  const sortTasks = useCallback(() => {
    setTasks((prev) => prev.sort((a) => (a.done ? 1 : -1)));
  }, [tasks]);

  const createTask = useCallback((title: string) => {
    const task: Task = {
      id: uuid(),
      title,
      done: false,
    };

    setTasks((prev) => [...prev, task]);
    sortTasks();
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    sortTasks();
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    sortTasks();
  }, []);

  const totalDoneTasks = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks]
  );
  const totalTasks = useMemo(() => tasks.length, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        totalDoneTasks,
        totalTasks,
        createTask,
        removeTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
