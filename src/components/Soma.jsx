/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props
    return (
        <Card title="Somaa dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{min + max}</span>
                </span>
            </div>
        </Card>
    )
}
