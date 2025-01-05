import React from "react";

import Header from "./Header";
import NovoUsuario from "./NovoUsuario";
import Toast from "./Toast";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toast = null;

        this.setToastRef = element => {
            this.toast = element;
        }
    }

    render() {
        return (
            <div>
                <Header />
                <NovoUsuario
                    onSubmit={usuario => {
                        let genero = usuario.genero == 'm' ? 'o' : 'a'
                        this.toast.sucesso(`Seja bem-vind${genero} ${usuario.nome}`)
                    }}
                    erro={msg => this.toast.erro(msg)}
                />
                <Toast ref={this.setToastRef}/>
            </div>
        );
    }
}

export default App;