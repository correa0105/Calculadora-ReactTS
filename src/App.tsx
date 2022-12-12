import React, { useState } from "react";
import { Container, ContainerContent, ContainerDisplay, ContainerTeclado } from "./styles";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState("0");
  const [oldNumber, setOldNumber] = useState("0");
  const [operator, setOperator] = useState("");

  const handleAddNumber = (number: number | string | undefined | any) => {
    setCurrentNumber(`${currentNumber === "0" ? "" : currentNumber}` + number)
  }

  const handleClear = () => {
    setCurrentNumber("0");
  }

  const handlePorcentage = () => {
    const porcentagem = Number(currentNumber) / 100;
    setCurrentNumber(String(porcentagem));
  }

  const signHandle = () => {
    if(Number(currentNumber) > 0) {
      setCurrentNumber(String(-currentNumber))
    } else {
      const number = Number(currentNumber);
      setCurrentNumber(String(Math.abs(number)))
    }
  }

  const operatorHandle = (operator: string) => {
    const operatorType = operator;
    setOperator(operatorType);
    setOldNumber(currentNumber);
    setCurrentNumber("0")
  }

  const  handleEquals = () => {
      if(operator==="/") {
        const calc = Number(oldNumber) / Number(currentNumber);
        setCurrentNumber(String(calc)) 
      } else if(operator==="+") {
        const calc = Number(oldNumber) + Number(currentNumber);
        setCurrentNumber(String(calc)) 
      } else if(operator==="-") {
        const calc = Number(oldNumber) - Number(currentNumber);
        setCurrentNumber(String(calc)) 
      } else if(operator==="*") {
        const calc = Number(oldNumber) * Number(currentNumber);
        setCurrentNumber(String(calc)) 
      }
  }
 
  return (
    <Container>
      <ContainerContent>
        <ContainerDisplay>
          <Input value={currentNumber}/>
        </ContainerDisplay>
        <ContainerTeclado>
            <Button onClick={handleClear} color="#585858" title="AC" />
            <Button onClick={signHandle} color="#585858" title="+/-" />
            <Button onClick={handlePorcentage} color="#585858" title="%" />
            <Button onClick={() => operatorHandle("/")} color="#F3A43B" title="/" />
            <Button onClick={() => handleAddNumber("7")} color="#747474" title="7" />
            <Button onClick={() => handleAddNumber("8")} color="#747474" title="8" />
            <Button onClick={() => handleAddNumber("9")} color="#747474" title="9" />
            <Button onClick={() => operatorHandle("*")} color="#F3A43B" title="x" />
            <Button onClick={() => handleAddNumber("4")} color="#747474" title="4" />
            <Button onClick={() => handleAddNumber("5")} color="#747474" title="5" />
            <Button onClick={() => handleAddNumber("6")} color="#747474" title="6" />
            <Button onClick={() => operatorHandle("-")} color="#F3A43B" title="-" />
            <Button onClick={() => handleAddNumber("1")} color="#747474" title="1" />
            <Button onClick={() => handleAddNumber("2")} color="#747474" title="2" />
            <Button onClick={() => handleAddNumber("3")} color="#747474" title="3" />
            <Button onClick={() => operatorHandle("+")} color="#F3A43B" title="+" />
            <Button onClick={() => handleAddNumber("0")} color="#747474" title="0" />
            <Button onClick={() => handleAddNumber(",")} color="#747474" title="," />
            <Button onClick={handleEquals} color="#F3A43B" title="=" />
        </ContainerTeclado>
      </ContainerContent>
    </Container>
  );
}

export default App;
