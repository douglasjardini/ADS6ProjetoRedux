/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{(min + max)/2}</span>
                </span>
            </div>
        </Card>
    )
}
