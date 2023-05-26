// Importação das dependências necessárias para o componente
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard} from "react-native"
import ResultMedia from "./ResultImc/Index.js";
import styles from "./style.js";

// Definição do componente "Form" como padrão para exportação
export default function Form(){

    // Criação de estados iniciais utilizando o useState
    const[nota1, setNota1]=useState(null) // estado para armazenar a altura
    const[nota2, setNota2]=useState(null) // estado para armazenar a altura
    const[nota3, setNota3]=useState(null) // estado para armazenar a altura
    const[nota4, setNota4]=useState(null) // estado para armazenar a altura




    const[messageMedia, setMessageMedia]=useState("Aguardando Valores...") // estado para armazenar a mensagem de resultado do cálculo
    const[media, setMedia]=useState(null) // estado para armazenar o valor do IMC calculado
    const[textButton, setTextButton]=useState("Calcular") // estado para armazenar o texto do botão

    const[errorMessage, setErrorMessage]= useState(null);

    function verificationMedia(){
        if(media == null){
            Vibration.vibrate();//vibra o cell quando da erro
            setErrorMessage("CAMPO OBRIGATÓRIO*")
        }
    }  

    // Função responsável por realizar o cálculo do IMC
    function mediaCalculator(){
        return setMedia((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4).toFixed(2)
    }

    // Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
    function validationMedia(){
        if(nota1,nota2,nota3,nota4 != null){
            mediaCalculator()
            setNota1(null)
            setNota2(null)
            setNota3(null)
            setNota4(null)

            setMessageMedia("Seu imc é igual a:")
            setTextButton("Calcular novamente")

            //novo
            setErrorMessage(null)


            return
        }
        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("PREENCHA AS NOTAS PARA CALCULAR!")
        verificationMedia()

    }

    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        {/* faz com que, ao clicar em qqr lugar da tela o teclado feche */}


            <View style={styles.form}>
            <Text style={styles.formLabel}>Nota 1</Text>
            <TextInput style={styles.input} onChangeText={setNota1} value={nota1}placeholder="digite nota1" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <Text style={styles.formLabel}>nota 2</Text>
            <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder="digite nota2" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Text style={styles.formLabel}>nota 3</Text>
            <TextInput style={styles.input} onChangeText={setNota3} value={nota3} placeholder="digite nota3" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Text style={styles.formLabel}>nota 4</Text>
            <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder="digite nota4" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text> 
            

            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationMedia()}}>
            <Text style={styles.textButtonCalculator}> {textButton}</Text>
            </TouchableOpacity>


            </View>
            <ResultMedia messageResultMedia={messageMedia} resultMedia={media}/>
         </Pressable>
    )
}
