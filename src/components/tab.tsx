import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CandidatComponent from './Candidat'
import GarantComponent from './garant'
import MyFileComponent from './myFile'

function TabComponent() {
    return (
        <Tabs>
            <TabList>
                <Tab>Mon dossier locataire</Tab>
                <Tab>Permissions</Tab>
                <Tab>Partage</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <h1>Mon dossier en un clin d’oeil</h1>
                    <p className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>Retrouvez tous les indicateurs correspondants à l’ensemble des candidats.</p>
                    <ul className='flex'>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                            <h3>
                                4500€
                            </h3>
                            <p>NET MENSUEL</p>
                            <p>(avant impots)</p>
                        </li>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                            <h3>
                                CDI
                            </h3>
                            <p>PRISE DE FONCTION</p>
                            <p>le 17/03/2018</p>
                        </li>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                            <h3>
                                1750€
                            </h3>
                            <p>NET MENSUEL GARANT</p>
                            <p>(avant impots)</p>
                        </li>
                    </ul>
                    <CandidatComponent />
                    <MyFileComponent />
                    <h2>Garant : Martine Bricard</h2>
                    <GarantComponent />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabComponent