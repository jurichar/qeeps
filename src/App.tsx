import IntroComponent from './components/intro'
import TabComponent from './components/tab'
import arrowClassic from './assets/arrow_classic.svg';

function App() {
  return (
    <html className='h-full w-full m-5 font-poppins text-lg font-medium leading-relaxed'>
      <head>
        <title>My first React app</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
        </style>
      </head>
      <body className='h-auto w-auto' style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        fontSize: '1rem',
        color: "#164951"
      }}>
        <div className='flex justify-start items-center text-center gap-2 my-4'>
          <p style={{ fontSize: '0.875rem' }}>Mon dossier locataire</p>
          <div style={{
            backgroundImage: `url(${arrowClassic})`,
            backgroundSize: 'cover',
            width: '0.875rem',
            height: '0.875rem',
          }}
          ></div>
        </div>
        <IntroComponent />
        <TabComponent />
      </body >
    </html >
  )
}

export default App
