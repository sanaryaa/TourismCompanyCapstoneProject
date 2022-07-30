import logo from '../img/logo.png'
import '../fonts/rudawregular2.ttf'
function Navigation() {
  return (
    <div className='h-full w-28 flex flex-col items-center justify-start backdrop-blur ml-50% '>
       <div className='w-full h-1/4 flex items-start justify-center '>
        <img src={logo} className="w-20 h-20 "/>
       </div>
        <nav className='w-full h-2/4 flex flex-col justify-center items-center'>
            <ul className='w-full h-full flex flex-col justify-center items-center'>
            <li className='rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center'>ماڵەوە</li>
                <li className='rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center'>هاوینەهەوار</li>
                <li className='rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center'>هۆتێل</li>
                <li className='rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center'>ڕێستۆرانت</li>
                <li className='rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center'>دەربارە</li>
                <li className='rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center'>پەیوەندی</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation