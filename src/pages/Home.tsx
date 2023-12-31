import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./stylesHome";
import {useForm} from 'react-hook-form';
import * as zod from 'zod';  
import { zodResolver } from "@hookform/resolvers/zod";

export function Home (){

    const newCycleFormValidationSchema =  zod.object({
        task: zod.string().min(3, 'Informe o nome da tarefa.'),
        MinutesAmount: zod.number().min(5).max(60, 'O tempo máximo é de 60 minutos')
    });

    const {register, handleSubmit, watch} = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
    });

    function handleCreateNewCycle(data: any){
        console.log(data)
    };

    const task = watch('task');

    const isSubmitDisabled = !task;
 
    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em:</label>
                    <TaskInput id="task" list="task-suggestions" placeholder="De um nome para o seu projeto..." {...register('task')} />
                    <datalist id="task-suggestions">
                        <option value="projeto 1"></option>
                        <option value="projeto 2"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60} {...register('minutesAmount', {valueAsNumber: true})}/>

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} >
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}