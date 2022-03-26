/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

function Sorteio(props) {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max-min)) + min
    return (
        <Card title="Sorteio dos Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{aleatorio}</span>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapState)(Sorteio)