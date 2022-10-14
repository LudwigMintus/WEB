let newMatrix = JSON.parse(localStorage.getItem('Answer'))
document.querySelector('.TbodyTable').innerHTML =
    `
        <tr id="table_hat">
            <td>№</td>
            <td>Значение X</td>
            <td>Значение Y</td>
            <td>Значение R</td>
            <td>Ответ</td>
            <td>Время отправления запроса</td>
            <td>Время работы скрипта</td>
        </tr>
`
for ( let i = 0; i < newMatrix.length; i++) {
    document.querySelector('.TbodyTable').innerHTML +=
        `
                    <tr id="table_hat">
                    <td> ${i + 1} </td>
                    <td> ${newMatrix[i].X} </td>
                    <td> ${newMatrix[i].Y}</td>
                    <td> ${newMatrix[i].R}</td>
                    <td> ${newMatrix[i].Answer} </td>
                    <td> ${newMatrix[i].Current}</td>
                    <td> ${newMatrix[i].Execution}</td>
                    </tr>
        `
}
