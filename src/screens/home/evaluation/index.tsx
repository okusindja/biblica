import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { ScrollView, Text, View, TouchableOpacity, Button } from "react-native";
import { ContentHeader } from "../../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const questions = [
  {
    id: 1,
    question: "Pergunta 1: Onde nasceu Jesus Cristo?",
    options: [
      { option: "Luanda", isCorrect: false },
      { option: "São Paulo", isCorrect: false },
      { option: "Belém", isCorrect: true },
      { option: "Belém do Pará", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Pergunta 2: Quem foi o primeiro homem criado por Deus?",
    options: [
      { option: "Isaías", isCorrect: false },
      { option: "Roboão", isCorrect: false },
      { option: "Paulo", isCorrect: false },
      { option: "Adão", isCorrect: true },
    ],
  },
  // Adicione mais perguntas aqui seguindo o mesmo padrão
];

const Evaluation = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(120);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState({
    done: false,
    correctAnswers: 0,
  });

  useEffect(() => {
    checkTestCompletion();
  }, []);

  useEffect(() => {
    let interval;
    if (
      !showInstructions &&
      currentQuestionIndex < questions.length &&
      !testCompleted
    ) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            handleNextQuestion();
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [showInstructions, currentQuestionIndex, testCompleted]);

  const checkTestCompletion = async () => {
    const result = await AsyncStorage.getItem("testResult");
    if (result) {
      const parsedResult = JSON.parse(result);
      setTestResult({ done: true, ...parsedResult });
      setShowInstructions(false);
      setTestCompleted(true);
    }
  };

  const handleNextQuestion = (isCorrect = false) => {
    // Incrementa a contagem de respostas corretas se a resposta for correta
    if (isCorrect) {
      setTestResult((prev) => ({
        ...prev,
        correctAnswers: prev.correctAnswers + 1,
      }));
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimer(120); // Reinicia o timer para a próxima pergunta
    } else {
      finishTest(); // Chama a função para finalizar o teste quando todas as perguntas forem respondidas
    }
  };

  const finishTest = async () => {
    alert("Você completou o teste!");
    const finalResult = {
      done: true,
      correctAnswers: testResult.correctAnswers,
    };
    await AsyncStorage.setItem("testResult", JSON.stringify(finalResult));
    setTestCompleted(true);
    // Calcula a porcentagem de acerto
    const percentage = (finalResult.correctAnswers / questions.length) * 100;
    alert(
      `Você acertou ${finalResult.correctAnswers} de ${
        questions.length
      } perguntas (${percentage.toFixed(2)}%)`
    );
  };

  const startTest = async () => {
    // Resetar o estado para os valores iniciais
    setShowInstructions(false); // Mostrar as instruções novamente
    setCurrentQuestionIndex(0); // Voltar para a primeira pergunta
    setTimer(120); // Resetar o timer para 2 minutos
    setTestCompleted(false); // Indicar que o teste não está completo
    setTestResult({ done: false, correctAnswers: 0 }); // Resetar o resultado do teste

    // Opcional: Limpar o resultado do teste armazenado
    await AsyncStorage.removeItem("testResult");

    // Se você estiver usando navegação e quiser recarregar o componente, pode ser necessário um passo adicional aqui
  };

  if (testCompleted && testResult.done) {
    const percentage = (testResult.correctAnswers / questions.length) * 100;
    return (
      <Container>
        <ContentHeader title="Resultado do Teste" />
        <Text>Você já realizou este teste.</Text>
        <Text>
          Você acertou {testResult.correctAnswers} de {questions.length}{" "}
          perguntas ({percentage.toFixed(2)}%).
        </Text>
        {testCompleted && testResult.done && (
          <TouchableOpacity
            style={{
              backgroundColor: "#E21F2C",
              padding: 20,
              borderRadius: 5,
              marginVertical: 20,
            }}
            onPress={startTest}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Refazer Avaliação
            </Text>
          </TouchableOpacity>
        )}
      </Container>
    );
  }

  if (showInstructions) {
    return (
      <Container>
        <ContentHeader title="Avaliação" />
        <ScrollView>
          <Text style={{ marginVertical: 20 }}>
            Bem-vindo ao Nosso Teste de Avaliação!
          </Text>
          <Text style={{ marginVertical: 20 }}>
            Este teste foi desenvolvido para avaliar seus conhecimentos e
            habilidades em um determinado assunto. Aqui estão algumas instruções
            para ajudá-lo a navegar pelo teste:
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Leia cuidadosamente cada pergunta. Cada pergunta possui 4 opções de
            resposta, das quais apenas uma é correta.
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Selecione a resposta que você acredita ser a correta tocando na
            opção desejada. Uma vez selecionada, não é possível mudar sua
            resposta, então escolha com atenção!
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Prossiga no seu próprio ritmo. Não há limite de tempo, mas
            recomendamos que não se apresse e pense bem antes de escolher sua
            resposta.
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Acompanhe seu progresso. O teste consiste em 10 perguntas. Você será
            informado de sua pontuação ao final do teste.
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Desejamos boa sorte e esperamos que você encontre este teste
            desafiador e informativo. Vamos começar!
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#E21F2C",
              padding: 20,
              borderRadius: 5,
              marginVertical: 20,
            }}
            onPress={startTest}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Iniciar Avaliação
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container>
      <ContentHeader title="Avaliação" />
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 20 }}>
          Tempo restante: {timer} segundos
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 20 }}>
          {questions[currentQuestionIndex].question}
        </Text>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginBottom: 32 }}
            onPress={() => handleNextQuestion(option.isCorrect)}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {index + 1}. {option.option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Evaluation;
