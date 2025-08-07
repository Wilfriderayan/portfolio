import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/mainport.css';

import img1 from '../assets/img/IMG-20241021-WA0001.jpg';

function Mainport(){
    return (
        <div className="main-container d-flex flex-row">
            <div className="gauche w-75">
                <div className="apropos ">
                    <h1><i className="bi bi-person"></i> A Propos de Moi</h1>

                    <p> Diplômé de la Licence de Technologie en génie logiciel à l’IUT de douala, je suis un développeur web full-stack. Motivé, dynamique et passionné par le milieu de la conception et du développement de logiciels, je suis prêt à relever de nouveaux défis. et à acquérir de nouvelles connaissances dans de nombreux domaines</p>
                </div>
                <div className="experianceprofessionel">
                    <h1><i className="bi bi-briefcase"></i> Expériences professionnelles </h1>
                    <p>Au cours de mon parcours académique, j'ai eu l'occasion de faire des stages académiques et professionnels dans des hôpitaux et travailler sur plusieurs projets qui m'ont permis de mettre en pratique mes compétences en développement logiciel. Ce sont notamment :</p>
                    <div className="experiences">
                        <div className="experience-item">
                            <h3>STAGE PROFESSIONNEL EN GENIE LOGICIEL | Hôpital Gynéco-Obstétrique et Pédiatrique de Douala</h3>
                            <div className="period">Aout 2024 – octobre 2024 | Douala, yassa</div>
                            <p>Conception et réalisation d’une application de gestion de la pharmacie</p>
                        </div>
                        <div className="experience-item">
                            <h3>STAGE ACCADÉMIQUE EN GÉNIE LOGICIEL | Secour médical camerounais</h3>
                            <div className="period">Juillet 2023 – septembre 2023 | Douala, Pk12</div>
                            <p>Conception et réalisation d'un logiciel de gestion des patients</p>
                        </div>
                    </div>
                </div>
                <div className="mesprojets">
                    <h1><i className="bi bi-folder"></i>  Mes Projets</h1>
                    <p>Voici quelques projets sur lesquels j'ai travaillé récemment :</p>
                    <div className="projets">
                        <div className="projet-item">
                            <h3>Conception et réalisation d’une application de rappels de rendez-vous médicaux</h3>
                            <p>Une application web pour la gestion des rendez-vous médicaux, leurs rappels afin d'optimiser la prise en charge des patients par les medecins.</p>
                            <div className="technologies">
                                <span>html, css, js</span>
                                <span>Django</span>
                                <span>Mysql</span>
                            </div>
                            <div className="link">
                                <a href="https://github.com/Wilfriderayan/project_tutore" target="_blank" rel="noopener noreferrer">voir sur github</a>
                            </div>
                        </div>
                        <div className="projet-item">
                            <h3>Conception et réalisation d’une application de gestion de pharmacie</h3>
                            <p>Une application web pour la gestion des stocks et des ventes dans une pharmacie de l'hôpital Gynéco-Obstétrique et Pédiatrique de Douala.</p>
                            <div className="technologies">
                                <span>html, css, js</span>
                                <span>Django</span>
                                <span>MySQL</span>
                            </div>
                            <div className="link">
                                <a href="https://github.com/Wilfriderayan/gest_pharm_hgoped" target="_blank" rel="noopener noreferrer">voir sur github</a>
                            </div>
                        </div>
                        <div className="projet-item">
                            <h3>Conception et réalisation d’un logiciel de Gestion des Patients</h3>
                            <p>Un logiciel pour la gestion des dossiers patients du Secours Médical Camerounais.</p>
                            <div className="technologies">
                                <span>Visual Basic</span>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="droite w-25">
                <div className="contacts">
                    <h2><i className="bi bi-envelope"></i> Contact</h2>
                    <a className="link" style={{ textDecoration: 'none', color: 'inherit' }} href="mailto:noguerayan9@gmail.com"><p>Email: noguerayan9@gmail.com</p></a>
                    <a className="link" style={{ textDecoration: 'none', color: 'inherit' }} href="tel:+237680810536"><p>Téléphone: +237 680 810 536</p></a>
                </div>
                <div className="mescompetances">
                    <h1><i className="bi bi-gear"></i> Mes compétences</h1>
                    <ul>
                        <li>Développement Web</li>
                        <li>Gestion de Base de Données</li>
                        <li>Langages de Modélisation UML et MERISE</li>
                        <li>Conception et réalisation d'Applications</li>
                    </ul>
                </div>
                <div className="mestechnologies">
                    <h1><i className="bi bi-tools"></i> Technologies utilisées</h1>
                    <ul>
                        <table>
                            <tr>
                                <td><li>HTML</li></td>
                                <td><progress className="" value={0.75}></progress></td>
                            </tr>
                            <tr>
                                <td><li>CSS</li></td>
                                <td><progress className="" value={0.6}></progress></td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td><progress className=""  style={{marginRight:0}}value={0.6}></progress></td>
                            </tr>
                            <tr>
                                <td><li>ReactJS</li></td>
                                <td><progress className="" style={{marginRight:0}} value={0.5}></progress></td>
                            </tr>
                            <tr>
                                <td><li>Django</li></td>
                                <td><progress className="" value={0.6}></progress></td>
                            </tr>
                            <tr>
                                <td><li>MySQL</li></td>
                                <td><progress className="" value={0.85}></progress></td>
                            </tr>
                        </table>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mainport;