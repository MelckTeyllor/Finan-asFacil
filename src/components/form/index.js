import React, { useState } from 'react';
import Grid from "../Grid";
import * as C from './style';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" checked={!isExpense} name="group1" onChange={() => setIsExpense(false)} />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                </C.RadioGroup>

                <C.RadioGroup>
                    <C.Input type="radio" id="rExpenses" checked={isExpense} name="group1" onChange={() => setIsExpense(true)} />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>Adicionar</C.Button>

            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
}

export default Form;
