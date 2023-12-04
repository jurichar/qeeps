import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CandidatComponent from './Candidat'
import GarantComponent from './garant'
import MyFileComponent from './myFile'

function TabComponent() {
    return (
        <Tabs>
            <TabList style={{ fontSize: '0.813rem' }} className='flex gap-4 my-5 border-b-2'>
                <Tab className='border-b-4 text-black'>Mon dossier locataire</Tab>
                <Tab style={{ fontWeight: '400' }}>Permissions</Tab>
                <Tab style={{ fontWeight: '400' }}>Partage</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <h1 style={{ fontSize: '1.25rem' }}>Mon dossier en un clin d’oeil</h1>
                    <p className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4 my-4 bg-blue-100' style={{ fontSize: '0.75rem', fontWeight: '400' }}>Retrouvez tous les indicateurs correspondants à l’ensemble des candidats.</p>
                    <ul className='flex justify-center items-center text-center gap-5'>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4 w-full'>
                            <h3 style={{ fontSize: '1.25rem' }}>
                                4500€
                            </h3>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>NET MENSUEL</p>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>(avant impots)</p>
                        </li>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4 w-full'>
                            <h3 style={{ fontSize: '1.25rem' }}>
                                CDI
                            </h3>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>PRISE DE FONCTION</p>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>le 17/03/2018</p>
                        </li>
                        <li className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4 w-full'>
                            <h3 style={{ fontSize: '1.25rem' }}>
                                1750€
                            </h3>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>NET MENSUEL GARANT</p>
                            <p style={{ fontSize: '0.5rem', fontWeight: '300' }}>(avant impots)</p>
                        </li>
                    </ul>
                    <CandidatComponent />
                    <MyFileComponent />
                    <h2 style={{ fontSize: '1.25rem' }} className='my-4' >Garant : Martine Bricard</h2>
                    <GarantComponent />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs >
    )
}

export default TabComponent