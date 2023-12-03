import IntroComponent from './components/intro'
import TabComponent from './components/tab'
import arrowClassic from './assets/arrow_classic.svg';

function App() {

  return (
    <html className='h-full w-full m-5'>
      <head>
        <title>My first React app</title>
      </head>
      <body className='h-auto w-auto'>
        <div className='flex justify-start items-center text-center gap-2 my-4'>
          <p>Mon dossier locataire</p>
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
    </html>
  )
}

export default App
