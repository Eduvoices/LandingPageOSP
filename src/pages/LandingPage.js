import logo from '../../src/assets/logo_mos-removebg-preview.png'
import fachada from '../../src/assets/fachada_option.png'
import idoso from '../../src/assets/old-man-svgrepo-com (1).svg'
import trabalhador from '../../src/assets/engineer-worker-svgrepo-com (1).svg'
import contrato from '../../src/assets/contract-sign-line-svgrepo-com.svg'
import familia from '../../src/assets/family-svgrepo-com.svg'

import { HashLink } from 'react-router-hash-link'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';

const LandingPage = () => {
    const [open, setOpen] = useState(false)

    function openMenu() {
        setOpen(!open)
    }

    return (
        <div className="landing-body">
            <div className="landing-wrapper">
                <div className='info' style={{
                    height:'40px',
                    width:'100%',
                    backgroundColor:'#c50101',
                    color:'#fff',
                    display:'flex',
                    alignItems: 'center',
                    justifyContent:'space-around',
                    fontWeight:'bold'
                }}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <i className="pi pi-clock"></i>
                        <span style={{marginLeft:'8px'}}>08:00 - 18:00</span>
                    </div>

                    <div style={{display:'flex', alignItems:'center'}}>
                        <i className="pi pi-phone"></i>
                        <span style={{marginLeft:'8px'}}>(43) 3172-4700</span>
                    </div>

                    <div style={{display:'flex', alignItems:'center'}}>
                        <i className="pi pi-map-marker"></i>
                        <span style={{marginLeft:'8px'}}>Rua Flamingos - 1079 - Arapongas/PR</span>
                    </div>

                </div>

                <div id="header">
                    <div className="header-top">
                        <img src={logo} className="logo" alt="babylon-layout"/>

                            <span id="landing-menu-button">
                                {open === false ? (
                                        <ul className='ul-menu'>
                                            <li>
                                                <i className="pi pi-ellipsis-v" onClick={openMenu}></i>
                                            </li>
                                        </ul>
                                ) : (
                                    <ul className='ul-menu'>
                                        <li>
                                            <HashLink to='/#about'>Quem somos</HashLink>
                                        </li>
                                        <li>
                                            <HashLink to='/#areas'>Áreas de atuação</HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#team">Equipe</HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#contact">Contato</HashLink>
                                        </li>
                                        <li>
                                            <i className='pi pi-times' onClick={openMenu}></i>
                                        </li>
                                    </ul>
                                )}
                            </span>

                            <ul id="landing-menu">
                                <li>
                                    <HashLink to='/#about'>Quem somos</HashLink>
                                </li>
                                <li>
                                    <HashLink to='/#areas'>Áreas de atuação</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/#team">Equipe</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/#contact">Contato</HashLink>
                                </li>
                            </ul>
                    </div>

                    <div className="header-content" style={{position:'relative'}}>
                        <h1 style={{
                            color:'#cc1515',
                            maxWidth:'440px'
                        }}>Oliveira, Silva & Pelosi</h1>
                        <p style={{color:'#000'}}>Escritório de Advocacia</p>

                        <span style={{
                            position:'absolute',
                            bottom:'0',
                            right:'0'
                        }}>Designed by Freepik</span>
                    </div>
                </div>

                <div style={{height:'40px', backgroundColor:'#cc1515', width:'100%'}}></div>

                <div id="about" style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'rgb(244 244 244)'
                }}>
                    <img src={fachada} alt='Fachada do escritório' style={{width:'360px'}}/>
                    <div style={{
                        textAlign:'justify',
                        marginLeft:'32px'}}>
                        <h2 style={{marginBottom:'48px'}}>Quem somos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, optio. Perspiciatis, aliquam deserunt error quos quae magni praesentium non
                            cumque! Rerum provident soluta nisi, obcaecati eius quae corrupti dignissimos dolore.
                        </p>
                    </div>
                </div>

                <div style={{height:'40px', backgroundColor:'#cc1515', width:'100%'}}></div>

                <div id="areas" style={{backgroundColor:'#fff', border:'none'}}>
                    <h3 style={{marginBottom:'48px'}}>Áreas de atuação</h3>

                    <div className='div-flex'>

                        <p className='feature-box' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'120px', backgroundColor:'#ba1414'}}>
                            <i><img src={idoso} alt='' style={{width:'32px', height:'32px', position:'unset'}}/></i>
                            <span style={{color:'#fff'}}>Direito previdenciário</span>
                        </p>

                        <p className='feature-box' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'120px', backgroundColor:'#ba1414'}}>
                            <i><img src={contrato} alt='' style={{width:'32px', height:'32px', position:'unset'}}/></i>
                            <span style={{color:'#fff'}}>Direito civil</span>
                        </p>

                        <p className='feature-box' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'120px', backgroundColor:'#ba1414'}}>
                            <i><img src={trabalhador} alt='' style={{width:'32px', height:'32px', position:'unset'}}/></i>
                            <span style={{color:'#fff'}}>Direito do trabalho</span>
                        </p>

                        <p className='feature-box' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'120px', backgroundColor:'#ba1414'}}>
                            <i><img src={familia} alt='' style={{width:'32px', height:'32px', position:'unset'}}/></i>
                            <span style={{color:'#fff'}}>Direito de família</span>
                        </p>
                    </div>

                </div>

                <div style={{height:'40px', backgroundColor:'#cc1515', width:'100%'}}></div>

                <div id="team">
                    <h3>Equipe</h3>
                    <div className="grid">
                        <div className="col-12 md:col-12 lg:col-4">
                            <div className="feature-box" style={{height:'280px'}}>
                                <img src='https://placehold.co/320x200' alt=''/>
                                <p style={{fontSize:'16px'}}>Evandro Cesar Mello de Oliveira - OAB/PR 38.387</p>
                                <span>Direito Previdenciário</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4">
                            <div className="feature-box" style={{height:'280px'}}>
                                <img src='https://placehold.co/320x200' alt=''/>
                                <p style={{fontSize:'16px'}}>Alexandre da Silva - OAB/PR 40.273</p>
                                <span>Direito Previdenciário</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4">
                            <div className="feature-box" style={{height:'280px'}}>
                                <img src='https://placehold.co/320x200' alt=''/>
                                <p style={{fontSize:'16px'}}>Reynaldo Bezerra Pelosi - OAB/PR 65.803</p>
                                <span>Direito Previdenciário</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4">
                            <div className="feature-box" style={{height:'280px'}}>
                                <img src='https://placehold.co/320x200' alt=''/>
                                <p style={{fontSize:'16px'}}>Eduardo Marcelo Pinotti - OAB/PR 43.765</p>
                                <span>Direito Civil, Trabalho e Família</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'40px', backgroundColor:'#cc1515', width:'100%'}}></div>

                <div id="contact">
                    <h1>Contato</h1>
                    <div className="col-12">
                        <div className="card">
                            <form action='https://formsubmit.co/atendimento@advprev.com.br' method="POST">
                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor="firstname2">Nome completo</label>
                                        <InputText id="firstname2" type="text" name='name'/>
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor="lastname2">Email</label>
                                        <InputText id="lastname2" type="email" name='email'/>
                                    </div>
                                    <div className="field col-12">
                                        <label htmlFor="address">Mensagem</label>
                                        <InputTextarea id="address" rows="4" style={{resize:'none'}} name='message'/>
                                    </div>
                                    <input type="hidden" name="_next" value='https://tecjusfrontend.vercel.app/#/thankYou' />
                                </div>
                                <div className='button-div'>
                                    <Button type='submit' label='Enviar'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="footer" style={{backgroundColor:'#cc1515'}}>
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <img src={logo} alt="babylon-layout" className="footer-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <button style={{position:'fixed', right:'32px', bottom:'32px', zIndex:'9999', height:'64px', width:'64px', borderRadius:'50%', backgroundColor:'#2ecc71', border:'none'}}>
                <a href='https://wa.me/554331724700' target='_blank' rel='noreferrer'>
                    <i className='pi pi-whatsapp' style={{color:'#fff', fontSize:'2rem'}}></i>
                </a>
            </button>
    </div>

    )
}

export default LandingPage
