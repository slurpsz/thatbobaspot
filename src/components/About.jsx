import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-6xl text-center text-sage mb-5'>About Us</h1>
      <div className='grid lg:grid-cols-2'>

        <div>
          <img className='overflow-hidden rounded ml-80 shadow-lg' src="https://i.pinimg.com/564x/b8/51/f0/b851f0ec625cde59107b237d39b5ad09.jpg" alt="barista pouring ice into cup" />
        </div>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat consectetur ut odit magnam autem, voluptatum maxime dicta quo architecto adipisci. Amet, ut quo iste, veniam, blanditiis nesciunt esse ducimus in sed laboriosam placeat atque possimus laborum quisquam voluptates. Minus ipsam repellendus labore iure voluptatem? Nostrum consequuntur ullam quis. Laboriosam quisquam, corrupti aliquid officia et sapiente natus ex dolores esse quod. Consectetur fuga aliquam facere natus nemo aut maxime rerum alias repellendus nisi facilis incidunt quam iure quas, cum voluptate labore totam dolore sequi numquam eum, harum, quis iste ipsum. Alias eligendi minus beatae natus ab architecto mollitia ducimus! Quisquam, repellendus doloremque repellat dolor odit voluptatum veniam necessitatibus animi laudantium voluptas fugiat facere qui placeat expedita, blanditiis hic ea, amet quia eveniet voluptatibus molestiae. Placeat, excepturi inventore velit sint necessitatibus cum, quae quos quasi ipsam perferendis fugit autem consequuntur eos eligendi tempore id nobis hic? Consequatur sequi ab aliquid? Harum dolorem consequuntur, eaque, quo porro tempora nesciunt cupiditate veritatis enim quos tenetur explicabo.</p>
        </div>
      </div>
        <h2 className='text-sage text-4xl mt-5'>Mission Statement</h2>
      <div className='bg-grass'>
        <img className='float-right rounded overflow-hidden' src='https://i.pinimg.com/564x/42/6d/a3/426da3da98db4839619ef6a3785245aa.jpg' alt='tea leaves in hands' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolore consequuntur consequatur rem sed quos debitis culpa totam quia laborum! Aliquam laboriosam nam soluta cum eligendi quae dignissimos quo at.</p>
      </div>
    </div>
  )
}

export default About