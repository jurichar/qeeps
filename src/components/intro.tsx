import logo from '../assets/logo.svg';

function IntroComponent() {
    return (
        <div>
            <h1 style={{ fontSize: '1.5rem' }}>🪪 Mon dossier locataire</h1 >
            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <div className='flex items-center gap-7'>
                    <div style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        width: '5.75rem',
                        height: '5.75rem',
                    }}></div>
                    <div>
                        <h3>Félicitations, vous avez complété votre dossier à 100% 🎉</h3>
                        <p style={{ fontSize: '0.75rem', fontWeight: '400' }}>Vérifiez rapidement les différents indices correspondants à votre activité.</p>
                    </div>
                </div>
                <div className='border-t border-grayGray-10 my-4'></div>
                <div className='flex w-full gap-5'>
                    <div className='w-full'>
                        <p style={{ fontSize: '0.875rem' }}>Votre lien partageable</p>
                        <input style={{ fontSize: '0.875rem' }} type="text" value="https://www.google.com" placeholder="link" className='w-full rounded-lg border border-grayGray-10 bg-subtleWhite p-4' />
                    </div>
                    <div className='w-full'>
                        <p style={{ fontSize: '0.875rem' }}>Envoyer le dossier par e-mail</p>
                        <input style={{ fontSize: '0.875rem' }} type="text" value="https://www.google.com" placeholder="link" className='w-full rounded-lg border border-grayGray-10 bg-subtleWhite p-4' />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default IntroComponent