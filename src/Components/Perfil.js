import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function Perfil() {

    return(
        <div>
          <div className='perfil-pessoa'>
            <h1 className="perfil-nome">Guilherme Santa Rosa</h1>
            <p className="perfil-cargo">Análista de Sistemas</p>
            <small className="perfil-site">guilherme.4users.com.br</small>
          </div>
          <div className='call-action'>
           <button className="btn btnEmail"><MdEmail className="icon-email"/>Email</button>
          <button className="btn btnLinkedin"><BsLinkedin className="icon-linkedin"/>LinkedIn</button>
          </div>
    
        </div>
      )

}