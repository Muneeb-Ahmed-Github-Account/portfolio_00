import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { title } from 'process'

const data = [

{
    id : 0,
    title : "Atm Machine",
    desc : "CLI based project",
    image : "/project.01.png",
    tags  : ['Node.js','Typescript'],
},

{
    id : 1,
    title : "TODO LIST",
    desc : "CLI based project",
    image : "/project.02.jpg",
    tags  : ["Node.js", "Typescript"],
},
{
    id : 2,
    title : "Currancy Converter",
    desc : "CLI based Project",
    image : "/project.03.jpg",
    tags  : ['Node.js', 'Typescript'],
},
{
    id : 3,
    title : "Simple Calculator",
    desc : "CLI based project",
    image : "/project.04.jpg",
    tags  : ['NODE.JS', 'Typescript'],
},
{
    id : 4,
    title : "Number Guessing",
    desc : "This is CLI based game",
    image : "/project.05.jpg",
    tags  : ['NODE.JS', 'Typescript'],
},
{
    id : 5,
    title : "Word Counter",
    desc : "This is CLI based project",
    image : "/project.06.jpg",
    tags  : ['NODE.JS', 'Typescript'],
},

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='MY Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        image={el.image}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
