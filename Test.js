import React from 'react'

class Button extends React.Component {
    constructor() {
        super()

        this.state = {
            enabled: true,
            visible: true
        }
    }


    render() {
        return (
            <button className="estilo" onClick={this.props.clicou} >
            {props.label}
            </button>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <form>
                <button clicou={() => console.log('cliquei')} label="Botão" />
            </form>
        )
    }
}

const Button = props => (
    <button className="estilo" onClick={this.props.clicou} >
    {props.label}
    </button>
)
