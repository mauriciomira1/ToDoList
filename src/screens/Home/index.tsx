import React from "react";
import { View, Text } from "react-native";
import Logotipo from "../../components/logotipo/Logotipo";
import NewTask from "../../components/newTask/NewTask";
import { styles } from "./styles";
import WithoutTasks from "../../components/withoutTasks/WithoutTasks";
import Task from "../../components/task/Task";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Logotipo />
      </View>
      <View style={styles.viewTasks}>
        <NewTask />

        <View style={styles.badgeView}>
          <View style={styles.badge}>
            <Text style={styles.badgeTitleCreated}>Criadas</Text>
            <Text style={styles.badgeCounter}>0</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeTitleDone}>Concluídas</Text>
            <Text style={styles.badgeCounter}>0</Text>
          </View>
        </View>
        {/* <WithoutTasks /> */}
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
};

export default Home;
