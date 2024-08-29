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
                <div className='info'>
                    <div>
                        <i className="pi pi-clock"></i>
                        <span>Horário de Funcionamento das 08:00 às 18:00</span>
                    </div>

                    <div>
                        <i className="pi pi-envelope"></i>
                        <span>Email: contato@advprev.com.br</span>
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

                    <div className='sectionBreak'></div>

                    <div className="header-content">
                        <div style={{display:'flex', flexDirection:'column', width:'40%'}}>
                            <h1>Oliveira, Silva & Pelosi</h1>
                            <p><b>Advocacia Previdenciária</b></p>
                        </div>
                    </div>
                </div>

                <div className='sectionBreak'></div>

                <div id="about">
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

                <div className='sectionBreak'></div>

                <div id="areas">
                    <h3>Áreas de atuação</h3>

                    <div className='div-flex'>

                        <p className='feature-box areaBox'>
                            <i><img src={idoso} alt=''/></i>
                            <span>Direito previdenciário</span>
                        </p>

                        <p className='feature-box areaBox'>
                            <i><img src={contrato} alt=''/></i>
                            <span>Direito civil</span>
                        </p>

                        <p className='feature-box areaBox'>
                            <i><img src={trabalhador} alt=''/></i>
                            <span>Direito do trabalho</span>
                        </p>

                        <p className='feature-box areaBox'>
                            <i><img src={familia} alt=''/></i>
                            <span>Direito de família</span>
                        </p>
                    </div>

                </div>

                <div style={{height:'40px', backgroundColor:'#cc1515', width:'100%'}}></div>

                <div id="team">
                    <h3>Equipe</h3>
                    <div style={{ padding:'8px', margin:'24px 0px 24px 0'}}>
                        <h4 style={{color:'#cc1515'}}>Sócios</h4>
                        <div className="grid">
                            <div className="col-12 md:col-12 lg:col-4">
                                <div className="feature-box">
                                    <img src='https://placehold.co/320x200' alt=''/>
                                    <p>Dr. Evandro Cesar Mello de Oliveira - OAB/PR 38.387</p>
                                    <span>Direito Previdenciário</span>
                                </div>
                            </div>

                            <div className="col-12 md:col-12 lg:col-4">
                                <div className="feature-box">
                                    <img src='https://placehold.co/320x200' alt=''/>
                                    <p>Dr. Alexandre da Silva - OAB/PR 40.273</p>
                                    <span>Direito Previdenciário</span>
                                </div>
                            </div>

                            <div className="col-12 md:col-12 lg:col-4">
                                <div className="feature-box">
                                    <img src='https://placehold.co/320x200' alt=''/>
                                    <p>Dr. Reynaldo Bezerra Pelosi - OAB/PR 65.803</p>
                                    <span>Direito Previdenciário</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid'>
                        <div style={{ padding:'8px', margin:'24px 0px'}} className="col-12 md:col-12 lg:col-12">
                            <h4 style={{color:'#cc1515'}}>Equipe Jurídica Previdenciária</h4>
                            <div className="grid">
                                    <div className="col-12 md:col-12 lg:col-4">
                                        <div className="feature-box">
                                            <img src='https://placehold.co/320x200' alt=''/>
                                            <p>Dra. Amanda Rett Homen - OAB/PR 96.937</p>
                                            <span>Advogada</span>
                                        </div>
                                    </div>

                                    <div className="col-12 md:col-12 lg:col-4">
                                        <div className="feature-box">
                                            <img src='https://placehold.co/320x200' alt=''/>
                                            <p>Dr. Nikolas de Araújo Jacob - OAB/PR 109.419</p>
                                            <span>Advogado</span>
                                        </div>
                                    </div>

                                    <div className="col-12 md:col-12 lg:col-4">
                                            <div className="feature-box">
                                                <img src='https://placehold.co/320x200' alt=''/>
                                                <p>Elison de Oliveira de Campos</p>
                                                <span>Auxiliar Jurídico</span>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid'>
                        <div style={{ padding:'8px', margin:'24px 0px'}} className="col-12 md:col-12 lg:col-12">
                            <h4 style={{color:'#cc1515'}}>Outros Colaboradores</h4>
                            <div className="grid">
                                    <div className="col-12 md:col-12 lg:col-4">
                                        <div className="feature-box">
                                            <img src='https://placehold.co/320x200' alt=''/>
                                            <p>Dr. Eduardo Marcelo Pinotti - OAB/PR 43.765</p>
                                            <span>Direito Trabalhista, Cível e Família</span>
                                        </div>
                                    </div>

                                    <div className="col-12 md:col-12 lg:col-4">
                                        <div className="feature-box">
                                            <img src='https://placehold.co/320x200' alt=''/>
                                            <p>Paula Fernanda da Silva</p>
                                            <span>Secretária</span>
                                        </div>
                                    </div>

                                    <div className="col-12 md:col-12 lg:col-4">
                                            <div className="feature-box">
                                                <img src='https://placehold.co/320x200' alt=''/>
                                                <p>Ana Cláudia da Silva</p>
                                                <span>Auxiliar Geral</span>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='grid'>
                        <div style={{ padding:'8px', margin:'24px 0 24px 0px'}} className="col-12 md:col-12 lg:col-4">
                            <h4><b>Direito Trabalhista, Cível e Família</b></h4>
                            <div className="grid">
                                <div className="col-12 md:col-12 lg:col-12">
                                    <div className="feature-box">
                                        <img src='https://placehold.co/320x200' alt=''/>
                                        <p>Eduardo Marcelo Pinotti - OAB/PR 43.765</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style={{ padding:'8px', margin:'24px 0 24px 0px'}} className="col-12 md:col-12 lg:col-4">
                            <h4><b>Secretária</b></h4>
                            <div className="grid">
                                        <div className="col-12 md:col-12 lg:col-12">
                                            <div className="feature-box">
                                                <img src='https://placehold.co/320x200' alt=''/>
                                                <p>Paula Fernanda da Silva</p>
                                            </div>
                                        </div>
                            </div>
                        </div>

                        <div style={{ padding:'8px', margin:'24px 0 24px 0px'}} className="col-12 md:col-12 lg:col-4">
                            <h4><b>Auxiliar Geral</b></h4>
                            <div className="grid">
                                        <div className="col-12 md:col-12 lg:col-12">
                                            <div className="feature-box">
                                                <img src='https://placehold.co/320x200' alt=''/>
                                                <p>Ana Cláudia da Silva</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div className='sectionBreak'></div>

                <div id="contact">
                    <h3>Contato</h3>
                    <div className="col-12">
                        <div className="card">
                            <form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="hidden" name="accessKey" value="5915ca17-4fbc-4a4d-b43d-98e0a81d7e9c" />
                            <input type="hidden" name="redirectTo" value="https://landing-page-osp.vercel.app/#/thankYou" />


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
                                </div>
                                <div className='button-div'>
                                    <Button type='submit' label='Enviar'/>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div id="footer" style={{position:'relative'}}>
                    <div className="grid">
                        <div className="col-12 lg:col-12">
                            <img src={logo} alt="babylon-layout" className="footer-logo"/>
                        </div>
                    </div>

                    <div className='footerSectionBreak'></div>

                    <div className='offices-info'>
                        <div className="col-3 lg:col-3 offices">
                            <span>Arapongas - PR</span>
                            <span>Fone: (43) 3172-4700</span>
                            <span>Rua Flamingos, 1079 - Centro</span>
                            <span>CEP: 86700-150</span>
                        </div>

                        <div className="col-3 lg:col-3 offices">
                            <span>Astorga - PR</span>
                            <span>Fone: (44) 3234-1696</span>
                            <span>Rua Nossa Senhora Aparecida, 156</span>
                            <span>(esquina c/ Rua Beija Flor)</span>
                            <span>CEP: 86730-000</span>
                        </div>

                        <div className="col-3 lg:col-3 offices">
                            <span>Rolândia - PR</span>
                            <span>Fone: (43) 99924-9744</span>
                            <span>Rua Romário Martns, 28 - Centro</span>
                            <span>CEP: 86600-103</span>
                        </div>
                    </div>

                    <span style={{position:'absolute', bottom:'0', padding:'8px', color:'#fff'}}>Desenvolvido por <a href='https://tecjus.com.br/'>tecjus.com.br</a></span>

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
