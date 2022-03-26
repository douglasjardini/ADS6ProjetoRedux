/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

function Intervalo(props) {
    const {min, max} = props
    return(
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    {/* <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)}/> */}
                    <input type="number" value={min}/>
                </span>
                <span>
                <strong>Máximo:</strong>
                    {/* <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)}/> */}
                    <input type="number" value={max}/>
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

export default connect(mapState)(Intervalo)