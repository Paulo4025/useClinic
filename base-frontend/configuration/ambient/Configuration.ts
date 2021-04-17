import { Injectable } from '@angular/core';
import { Ambient } from './ConfigurationInterface';

@Injectable()
export class Configuration {

    public ambient: Ambient = null;
    startConfigurationProjectFrontEnd(idAmbient: number) {
        this.ambient = this.configurationConstants.ambient[idAmbient]        
    }
    public tipoAmbient = {
        idAmbientTeste: 1,
        idAmbientHomologacao: 2,
        idAmbientProducao: 3
    }
    public configurationConstants = {
        ambient: {
            1: { id: this.tipoAmbient.idAmbientTeste, endPoint: "http://192.168.0.118:8080/base" },
            2: { id: this.tipoAmbient.idAmbientHomologacao, endPoint: "" },
            3: { id: this.tipoAmbient.idAmbientProducao, endPoint: "" }
        }
    }
}