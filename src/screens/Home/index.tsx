import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Logotipo from "../../components/logotipo/Logotipo";
import NewTask from "../../components/newTask/NewTask";
import { styles } from "./styles";
import WithoutTasks from "../../components/withoutTasks/WithoutTasks";
import Task from "../../components/task/Task";

interface tasksProps {
  id: string;
  description: string;
  done: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [doneCount, setDoneCount] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].done === true) count++;
    }
    setDoneCount(count);
  }, [tasks]);

  const onAddTask = (taskDescription: string) => {
    setTasks((prevState) => [
      ...prevState,
      {
        description: taskDescription,
        id: Math.random().toString(36).substring(2, 10), // Criando um id aleatório para simular o Banco de Dados
        done: false,
      },
    ]);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToogle = (id: string) => {
    let newArray = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newArray);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Logotipo />
      </View>
      <View style={styles.viewTasks}>
        <NewTask onAddTask={(taskDescription) => onAddTask(taskDescription)} />

        <View style={styles.badgeView}>
          <View style={styles.badge}>
            <Text style={styles.badgeTitleCreated}>Criadas</Text>
            <Text style={styles.badgeCounter}>{tasks.length}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeTitleDone}>Concluídas</Text>
            <Text style={styles.badgeCounter}>{doneCount}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              description={item.description}
              key={item.id}
              handleDelete={() => handleDelete(item.id)}
              handleToogle={() => handleToogle(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <WithoutTasks />}
        />
        {/*         <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              description={item.description}
              key={item.id}
              handleDelete={() => handleDelete(item.id)}
              handleToogle={() => handleToogle(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <WithoutTasks />}
        /> */}

        {/* {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              id={task.id}
              description={task.description}
              key={task.id}
              handleDelete={() => handleDelete(task.id)}
              handleToogle={() => handleToogle(task.id)}
            />
          ))
        ) : (
          <WithoutTasks />
        )} */}

        {}
      </View>
    </View>
  );
};

export default Home;
