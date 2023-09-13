import data from '../assets/Skills.json'
import Ball from './canvas/Ball'
type Props = {}
function Skils({}: Props) {
  return (
    <div className="p-2">
      <h4 className='text-xl text-blue-300 pl-3 pt-14'>My tools</h4>
      <h1 className="sm:text-8xl text-7xl font-bold p-3">Skills</h1>
      <div className='grid sm:grid-cols-4 gap-3 grid-cols-2'>
      {data.data.map((skill:any,key:number)=>(
        <Ball key={key} skill={skill.logo} bg={skill.bg}/>
      ))}
      </div>
    </div>
  )
}

export default Skils