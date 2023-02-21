import React from "react";
import {RiInstagramLine} from 'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImFacebook2} from 'react-icons/im'
import {FaGithubSquare} from 'react-icons/fa'

export default function Footer() {

    return (
        <div>
          <footer className="footer-card">
            <div className='redes-sociais'>
                <FaTwitterSquare className="icon-twitter"/>
                <ImFacebook2 className="icon-face"/>
                <RiInstagramLine className="icon-insta"/>
                <FaGithubSquare className="icon-github"/>
            </div>
          </footer>
        </div>
      )

}