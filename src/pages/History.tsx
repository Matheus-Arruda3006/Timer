import { HistoryContainer, HistoryList, Status } from "./stylesHistory";

export function History (){
    return(
        <HistoryContainer>

        <h1>
           My history
        </h1>

        <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 1 semana</td>
                        <td>
                            <Status>Concluído</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 1 semana</td>
                        <td>
                            <Status>Concluído</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 1 semana</td>
                        <td>
                            <Status>Concluído</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>

        </HistoryContainer>
    );
}