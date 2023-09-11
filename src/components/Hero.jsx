import {logo}from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
        <nav className="flex justify-between
        items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" 
        className='w-28 object-contain'/>

        <button 
        type="button"
        onClick={()=>window.open('https://github.com/Dipmalya2003')}
        className="black_btn"
        >
            Github
        </button>
        </nav>
        <h1 className="head_text">Lets Summarize <br className="max-md:hidden"/>
        <span className="orange_gradient">with GPT-4</span>
        </h1>
        <h2 className="desc">
        Sumz, an open-source article 
        summarizer that converts large articles 
        into simple and succinct summaries, might
         help you streamline your reading.
        </h2>
    </header>
  )
}

export default Hero
