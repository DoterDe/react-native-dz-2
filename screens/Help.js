import { Button, View, Text, StyleSheet, ScrollView } from "react-native";

const Help = ({ navigation, route }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Помощь</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Добро пожаловать в наше приложение!</Text>{"\n"}
          Мы рады, что вы выбрали наше приложение для использования. Чтобы вам
          было удобнее и проще им пользоваться, мы подготовили несколько
          рекомендаций:
        </Text>
        <Text style={styles.subheading}>Основные функции приложения:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Регистрация:</Text>{" "}
          Чтобы начать использовать приложение, вам нужно зарегистрироваться.
          Введите ваше имя, номер телефона и email, чтобы создать учетную
          запись.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Счёт:</Text> На главном экране вы увидите
          ваш текущий баланс. Вы можете пополнить его, нажав на кнопку
          "Пополнить", или снять средства, выбрав кнопку "Снять".
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Список контактов:</Text> После регистрации,
          на странице "Контакты" вы можете увидеть все ваши данные (имя, номер
          телефона, email). Убедитесь, что они верны, чтобы получать
          уведомления и важную информацию.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Навигация:</Text> Для удобства навигации,
          используйте меню, чтобы быстро перемещаться между основными разделами
          приложения, такими как "Главная", "Счёт", "Контакты" и "Помощь".
        </Text>
        <Text style={styles.subheading}>Советы по использованию:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Данные:</Text> Убедитесь, что вы ввели
          правильные данные при регистрации, чтобы не возникало проблем с
          доступом и уведомлениями.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Баланс:</Text> Следите за состоянием вашего
          счёта. Если баланс слишком низкий, не забудьте пополнить его.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Безопасность:</Text> Не передавайте свои
          данные третьим лицам, чтобы обеспечить безопасность вашего аккаунта.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Проблемы с приложением:</Text> Если у вас
          возникли технические проблемы или вопросы, всегда можно обратиться в
          раздел "Поддержка" или написать нам по указанным контактам.
        </Text>

        <Button title="Главная" onPress={() => { navigation.navigate("Main"); }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  innerContainer: {
    padding: 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subheading: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Help;
